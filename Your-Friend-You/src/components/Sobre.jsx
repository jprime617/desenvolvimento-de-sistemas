import React from "react"

export default function Sobre() {
    return (
      <section className="container-sobre">
        <div>
          <div className="text-sobre"> {/* Correção aqui: classe correta é text-sobre */}
            <h1>Sobre Nós</h1>
            <p>
              Somos um time do balaco baco
            </p>
          </div>
          <div className="img-sobre">
            <img src="../public/placeholder.webp" alt="" />
          </div>
        </div>
      </section>
    );
  }