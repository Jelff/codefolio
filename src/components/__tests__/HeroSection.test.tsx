import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";


describe("HeroSection", () => {
  it("deve renderizar o título principal com saudação", () => {
    const nome = "Jeff"; // substitua por seu nome real se já estiver no código
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { name: new RegExp(`Oi, eu sou o ${nome}`, "i") });
    expect(heading).toBeInTheDocument();
  });
});
