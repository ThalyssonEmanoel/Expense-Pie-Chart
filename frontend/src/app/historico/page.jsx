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
    <div className="flex flex-col items-center min-h-screen  p-6">
      <h1 className="text-2xl text-black mb-6">Histórico de Despesas</h1>
    
      <table className="table-auto border-collapse w-full max-w-4xl text-black">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-black text-left">Despesa</th>
            <th className="px-4 py-2 border border-black text-left">Valor</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map(e => (
            <tr key={e.id}>
              <td className="px-4 py-2 border border-black">{e.titulo}</td>
              <td className="px-4 py-2 border border-black">R$ {e.valorDespesa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}