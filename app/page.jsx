'use client'
import { useState } from "react";

export default function Home() {

  const [nomeDespesa, setNomeDespesa] = useState('')
  const [valorDespesa, setvalorDespesa] = useState('')

 async function handleSubmit(e) {
    e.preventDefault()
    const resposta = await fetch('http://localhost:4000/eventos',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:
      JSON.stringify({
        "titulo":nomeDespesa,
        "valorDespesa":valorDespesa
      })
    })
    if (resposta.ok) {
      alert('Cadastrado com sucesso!')
    }else{
      alert('ERROR!!!!!!!!!!!!')
    }
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl">Cadastro de despesas</h1>
      {/* <div className="bg-red-500 p-1">
        Nome do evento:<b>{nomeDespesa}</b> <br />
        Data do evento:<b>{valorDespesa}</b>
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label htmlFor="nome">Despesa:</label>
            <input 
            type="text" 
            id="nome"
            value={nomeDespesa} 
            onChange={e => setNomeDespesa(e.target.value)}
            className="text-white p-1 bg-gray-500" />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="valor">Valor da despesa:</label>
          <div className="flex items-center bg-gray-500 p-1">
          <span className="text-white mr-2">R$</span>
          <input
            type="number"
            id="valorDespesa"
            value={valorDespesa}
            onChange={e => setvalorDespesa(e.target.value)}
            className="text-white bg-transparent border-none outline-none w-full"
          />
    </div>
          </div>
          <div>
            <input 
            type="submit"
            value="Cadastrar"
            className="bg-blue-700 text-gray-100 p-1 rounded" />
          </div>
        </form>
      </div>
    );
}