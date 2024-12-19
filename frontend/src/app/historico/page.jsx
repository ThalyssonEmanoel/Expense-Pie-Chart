'use client'

import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";  

export default function Historico() {
  const [gastos, setGastos] = useState([]);
  
  async function fetchGastos() {
    try {
      //Tentar usar `${process.env.NEXT_MY_API}/gastos`
      const resposta = await fetch( 'https://expense-pie-chart.vercel.app/gastos', {
        method: 'GET'
      });
      
      if (resposta.ok) {
        const dados = await resposta.json();
        console.log(dados);
        
        // Extract only the necessary properties from the docs array
        const extractedGastos = dados.docs.map(gasto => ({
          nome: gasto.nome,
          valorDespesa: gasto.valorDespesa,
          _id: gasto._id
        }));
        
        setGastos(extractedGastos);
      } else {
        console.error("Erro ao buscar dados:", resposta.statusText);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  const deleteGasto = async (id) => {
    try {
      const resposta = await fetch(`https://expense-pie-chart.vercel.app/api/gastos/${id}`, {
        method: 'DELETE',
      });
      
      if (resposta.ok) {
        setGastos(gastos.filter(gasto => gasto._id !== id));
      } else {
        console.error("Erro ao deletar gasto:", resposta.statusText);
      }
    } catch (error) {
      console.error("Erro ao deletar gasto:", error);
    }
  };

  useEffect(() => {
    fetchGastos();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-2xl text-black mb-6">Histórico de Despesas</h1>
    
      <table className="table-auto border-collapse  max-w-4xl text-black">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-black text-left">Despesa</th>
            <th className="px-4 py-2 border border-black text-left">Valor</th>
            <th className="px-4 py-2 border border-black text-left">Excluir</th> 
          </tr>
        </thead>
        <tbody>
          {gastos.map(e => (
            <tr key={e._id}>
              <td className="px-4 py-2 border border-black">{e.nome}</td>
              <td className="px-4 py-2 border border-black">R$ {e.valorDespesa}</td>
              <td className="px-10 py-2 border border-black">
                <button 
                  onClick={() => deleteGasto(e._id)} 
                  className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
