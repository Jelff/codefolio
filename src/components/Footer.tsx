const Footer = () => {
    return (
      <footer className="mt-24 py-10 border-t text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          Feito com 💙 usando React + TypeScript + TailwindCSS
        </p>
      </footer>
    );
  };
  
  export default Footer;
  