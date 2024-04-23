import LinkBarraNavegacao from "@/componentes/links-barra-navegacao";
import React from "react";

export default function Home() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <ul className="flex gap-4">
          <LinkBarraNavegacao href="/">Inicio</LinkBarraNavegacao>
          <LinkBarraNavegacao href="/cadastroEventos">Cadastro de Eventos</LinkBarraNavegacao>
          <LinkBarraNavegacao href="/cadastroIngressos">Cadastro Ingressos</LinkBarraNavegacao>
          <LinkBarraNavegacao href="/eventos">Eventos</LinkBarraNavegacao>
        </ul>
      </nav>
    </div>
  );
}
