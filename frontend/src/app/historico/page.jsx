'use client'

import { useState, useEffect } from "react";

export default function Historico() {
  const [gastos, setGastos] = useState([]);
  
  async function fetchGastos() {
    try {
      const resposta = await fetch(`${process.env.NEXT_MY_API}/gastos` || 'https://expense-pie-chart.vercel.app/gastos', {
        method: 'GET'
      });
      
      if (resposta.ok) {
        const dados = await resposta.json();
        setGastos(dados);
      } else {
        console.error("Erro ao buscar dados:", resposta.statusText);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  useEffect(() => {
    fetchGastos();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
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
            <tr key={e._id}>
              <td className="px-4 py-2 border border-black">{e.nome}</td>
              <td className="px-4 py-2 border border-black">R$ {e.valorDespesa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}