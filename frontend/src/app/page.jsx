'use client'
import { useState } from "react";

export default function Home() {

  const [nomeDespesa, setNomeDespesa] = useState('')
  const [valorDespesa, setValorDespesa] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const resposta = await fetch('http://localhost:3051/eventos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "titulo": nomeDespesa,
        "valorDespesa": valorDespesa
      })
    })
    if (resposta.ok) {
      alert('Cadastrado com sucesso!')
    } else {
      alert('ERROR!!!!!!!!!!!!')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex gap-8 w-full max-w-7xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
          <h1 className="text-2xl text-center text-white mb-6">Cadastro de despesas</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col my-2">
              <label htmlFor="nome" className="text-white">Despesa:</label>
              <input
                type="text"
                id="nome"
                value={nomeDespesa}
                onChange={e => setNomeDespesa(e.target.value)}
                className="text-black p-2 rounded focus:outline-none"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="valor" className="text-white">Valor da despesa:</label>
              <div className="flex items-center bg-gray-500 p-2 rounded">
                <span className="text-white mr-2">R$</span>
                <input
                  type="number"
                  id="valorDespesa"
                  value={valorDespesa}
                  onChange={e => setValorDespesa(e.target.value)}
                  className="text-black bg-transparent border-none outline-none w-full rounded"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <input
                type="submit"
                value="Inserir"
                className="bg-blue-700 text-gray-100 p-2 rounded cursor-pointer hover:bg-blue-600 transition"
              />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}