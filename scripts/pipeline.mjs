import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { performance } from "node:perf_hooks";
import { log, paint } from "./pipeline-log.mjs";

const start = performance.now();
const results = [];
let failure;
const steps = [
  [
    "Preparar Dependências",
    "Instalando as dependências pelo lockfile; cache do npm reutilizado quando disponível",
    ["ci"],
  ],
  [
    "Verificação Rápida do TypeScript",
    "Executando a verificação rápida do TypeScript",
    ["run", "type-check:quick"],
  ],
  [
    "Análise Completa do TypeScript",
    "Executando a análise completa com detecção de depreciações nos diagnósticos",
    ["run", "type-check:full"],
  ],
  [
    "Verificação Estrita do TypeScript",
    "Executando a verificação estrita do TypeScript",
    ["run", "type-check:strict"],
  ],
  [
    "Verificação de Qualidade com ESLint",
    "Verificando qualidade e padrão de código com ESLint",
    ["run", "lint:check"],
  ],
  [
    "Verificação de Formatação com Prettier",
    "Verificando a formatação do projeto com Prettier",
    ["run", "format:check"],
  ],
  [
    "Detecção de Duplicação",
    "Verificando duplicação com limite de 10%",
    ["run", "duplication:check"],
  ],
  [
    "Compilação do Projeto",
    "Gerando a compilação do projeto para produção",
    ["run", "build"],
  ],
];
const seconds = (since) => ((performance.now() - since) / 1000).toFixed(2);
function command(args) {
  return new Promise((resolve) => {
    const child = process.env.npm_execpath
      ? spawn(process.execPath, [process.env.npm_execpath, ...args], {
          stdio: "inherit",
        })
      : spawn("npm", args, { stdio: "inherit" });
    child.once("error", (error) => resolve({ code: 1, error: error.message }));
    child.once("close", (code, signal) =>
      resolve({
        code: code ?? 1,
        error: signal ? `Sinal: ${signal}` : undefined,
      }),
    );
  });
}

let name = "codefolio";
if (existsSync("package.json")) {
  try {
    name = JSON.parse(readFileSync("package.json", "utf8")).name ?? name;
  } catch {
    // A validação abaixo relata arquivos package.json inválidos.
  }
}
log(`Iniciando o pipeline do ${name}`, "yellow");
log("===================================");
log(
  "Modo: FULL\nEspelhando o workflow .github/workflows/ci.yml do GitHub Actions",
);
log(
  "\nModo completo: executando o pipeline com todas as verificações",
  "yellow",
);
log("Verificando pré-requisitos...");
try {
  for (const file of [
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "tsconfig.strict.json",
    "eslint.config.js",
  ]) {
    if (!existsSync(file)) throw new Error(`${file}: NÃO ENCONTRADO`);
    log(`OK: ${file}: ENCONTRADO`, "green");
  }
  const pkg = JSON.parse(readFileSync("package.json", "utf8"));
  name = pkg.name;
  if (Number(process.versions.node.split(".")[0]) < 24)
    throw new Error("Node.js 24 ou superior é obrigatório");
  log(`OK: Node.js: ${process.version}`, "green");
  const npm = await command(["--version"]);
  if (npm.code !== 0) throw new Error(npm.error ?? "NPM: NÃO ENCONTRADO");
  log("OK: NPM: ENCONTRADO", "green");
  if (!pkg.devDependencies?.typescript)
    throw new Error("TypeScript: NÃO CONFIGURADO");
  log(
    "OK: TypeScript: CONFIGURADO (instalação validada na etapa de dependências)",
    "green",
  );
  log("\nTodos os pré-requisitos foram atendidos!", "green");
  for (const [index, [title, description, args]] of steps.entries()) {
    log(`\nEtapa ${index + 1}/${steps.length}: ${title}`);
    log(`   ${description}`, "gray");
    if (process.env.GITHUB_ACTIONS) console.log(`::group::${title}`);
    const stageStart = performance.now();
    const timer = setInterval(
      () =>
        log(
          `   ${title} ainda em execução (${Math.floor((performance.now() - stageStart) / 1000)}s)...`,
          "gray",
        ),
      15000,
    );
    let result;
    try {
      result = await command(args);
    } finally {
      clearInterval(timer);
    }
    if (
      index === 0 &&
      result.code === 0 &&
      !existsSync("node_modules/typescript/bin/tsc")
    ) {
      result = { code: 1, error: "TypeScript: NÃO ENCONTRADO após npm ci" };
    }
    const elapsed = seconds(stageStart);
    results.push({ title, elapsed, ...result });
    if (process.env.GITHUB_ACTIONS) console.log("::endgroup::");
    if (result.code !== 0) {
      log(`FALHA: ${title} falhou!`, "red");
      log("   Esta etapa é obrigatória. O pipeline foi interrompido.", "gray");
      failure =
        result.error ??
        `Comando npm ${args.join(" ")} encerrou com código ${result.code}`;
      break;
    }
    if (index === 1) log("✅ Verificação TypeScript passou!", "green");
    log(
      `SUCESSO: ${title} concluída ${paint(`em ${elapsed}s`, "gray")}`,
      "green",
    );
  }
} catch (error) {
  failure = error.message;
}
log("\n============================================================");
log(`RELATÓRIO DO PIPELINE ${name.toUpperCase()}`);
log("============================================================");
log("Modo do pipeline: FULL");
log(`Tempo total: ${seconds(start)}s`, "gray");
log(
  `Etapas executadas: ${results.length}\nEtapas concluídas: ${results.filter((r) => r.code === 0).length}`,
);
log(
  `Etapas obrigatórias com falha: ${results.filter((r) => r.code !== 0).length}`,
  failure ? "red" : "green",
);
log("Etapas informativas com falha: 0", "green");
log("\nRESULTADOS:\n--------");
for (const result of results) {
  log(
    `${result.code === 0 ? "SUCESSO" : "FALHA"}: ${result.title} ${paint(`(${result.elapsed}s)`, "gray")}`,
    result.code === 0 ? "green" : "red",
  );
}
if (failure) {
  log(`\nErro: ${failure}`, "gray");
  log("\nO PIPELINE FALHOU!", "red");
  log(
    "Verifique os detalhes das etapas acima.\nCorrija todos os problemas antes de prosseguir.",
    "yellow",
  );
} else {
  log("\nANÁLISE:\n---------");
  for (const result of results.slice(1))
    log(`${result.title}: APROVADA`, "green");
  log("\nDetecção de código depreciado:");
  log(
    "Nenhuma depreciação foi detectada nos diagnósticos emitidos pelo compilador. Isso não garante que todas as APIs estejam atualizadas.",
    "gray",
  );
  log(
    "\nPIPELINE CONCLUÍDO COM SUCESSO!\nTodas as verificações obrigatórias foram aprovadas.",
    "green",
  );
}
log(
  `\nEste comportamento corresponde ${failure ? "à falha" : "ao sucesso"} no ci.yml`,
  failure ? "red" : "green",
);
process.exitCode = failure ? 1 : 0;
