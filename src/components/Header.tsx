import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 px-6 md:px-12 max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-tight">
        SeuNome.dev
      </Link>

      <nav className="space-x-6 text-gray-700 text-sm md:text-base">
        <Link to="/" className="hover:text-black transition">Início</Link>
        <Link to="/about" className="hover:text-black transition">Sobre</Link>
        <Link to="/experience" className="hover:text-black transition">Experiência</Link>
      </nav>
    </header>
  );
};

export default Header;
