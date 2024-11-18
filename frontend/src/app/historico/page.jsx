'use client'

import { useState, useEffect } from "react";

export default function Historico() {
  const [gastos, setGastos] = useState([]);

  async function fetchGastos() {
    const resposta = await fetch('http://localhost:3051/gastos');
    if (resposta.ok) {
      const dados = await resposta.json();
      setGastos(dados);
    } else {
      console.error("Erro ao buscar dados");
    }
  }
  console.log("1-",gastos);
  
  useEffect(() => {
    fetchGastos();
  }, []);

  console.log("2-",gastos);
  return (
    <div className=" p-6">
      <h1 className="text-2xl text-black mb-6">Histórico de Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>Despesa</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map(e => (
            <tr key={e.id}>
              <td >{e.titulo}</td>
              <td>R$ {e.valorDespesa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
