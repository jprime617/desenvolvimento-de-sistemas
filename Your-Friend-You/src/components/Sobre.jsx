import React from "react"

export default function Sobre() {
    return (
      <section className="sec-sobre">
        <div className="container-sobre">
          <div className="text-sobre"> 
            <h1>Sobre Nós</h1>
            <p>
            Olá, nós somos uma equipe de desenvolvedores júnior,
            estudantes do Ensino Médio Técnico em Desenvolvimento de Sistemas do SESI de São José.
            </p>
          </div>
          <div className="img-sobre">
            <img src="../public/placeholder.webp" alt="" />
          </div>
        </div>
      </section>
    );
  }