import { existsSync } from "node:fs";
import ts from "typescript";
import { log } from "./pipeline-log.mjs";

const host = {
  getCanonicalFileName: (file) => file,
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  getNewLine: () => ts.sys.newLine,
};
let failed = false;
let checked = 0;
let errors = 0;
let warnings = 0;
let deprecated = 0;
log("Iniciando verificação TypeScript...");

for (const config of ["tsconfig.json", "tsconfig.strict.json"]) {
  if (config !== "tsconfig.json" && !existsSync(config)) continue;
  checked += 1;
  log(
    `\nEtapa ${checked}: Verificação ${config === "tsconfig.json" ? "padrão" : "rigorosa"} (${config})`,
  );
  log(`Executando verificação TypeScript com ${config}...`, "gray");
  const configErrors = [];
  const parsed = ts.getParsedCommandLineOfConfigFile(
    config,
    { noEmit: true },
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic: (diagnostic) =>
        configErrors.push(diagnostic),
    },
  );
  const diagnostics = [...configErrors];
  if (parsed) {
    diagnostics.push(...parsed.errors);
    const program = ts.createProgram({
      rootNames: parsed.fileNames,
      options: parsed.options,
      projectReferences: parsed.projectReferences,
    });
    diagnostics.push(...ts.getPreEmitDiagnostics(program));
  }
  const configFailed =
    !parsed ||
    diagnostics.some((d) => d.category === ts.DiagnosticCategory.Error) ||
    diagnostics.some((d) =>
      /deprecat|obsolet/i.test(
        ts.flattenDiagnosticMessageText(d.messageText, "\n"),
      ),
    );
  log(`\nResultados para ${config}:`);
  for (const diagnostic of diagnostics) {
    const isDeprecated = /deprecat|obsolet/i.test(
      ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
    );
    if (diagnostic.category === ts.DiagnosticCategory.Error) errors += 1;
    if (diagnostic.category === ts.DiagnosticCategory.Warning) warnings += 1;
    if (isDeprecated) deprecated += 1;
    log(
      ts.formatDiagnostics([diagnostic], host),
      isDeprecated
        ? "magenta"
        : diagnostic.category === ts.DiagnosticCategory.Error
          ? "red"
          : "yellow",
    );
  }
  log(
    `Código de saída: ${configFailed ? 1 : 0}`,
    configFailed ? "red" : "green",
  );
  failed ||= configFailed;
}
log(
  "\n==================================================\nRESUMO\n==================================================",
);
log(`Configurações verificadas: ${checked}`);
log(`Total de erros: ${errors}`, errors ? "red" : "green");
log(`Total de avisos: ${warnings}`, warnings ? "yellow" : "green");
log(
  `Total de diagnósticos de depreciação: ${deprecated}`,
  deprecated ? "magenta" : "green",
);
log(
  failed ? "\nVERIFICAÇÃO REPROVADA" : "\nVERIFICAÇÃO APROVADA",
  failed ? "red" : "green",
);
log(
  "A detecção de depreciações se limita aos diagnósticos emitidos pelo compilador.",
  "gray",
);
process.exitCode = failed ? 1 : 0;
