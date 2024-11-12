'use client'
import { useState } from "react";

export default function Home() {

  const [nomeDespesa, setNomeDespesa] = useState('');
  const [valorDespesa, setValorDespesa] = useState('');
  const [notificacao, setNotificacao] = useState(null); 

  async function handleSubmit(e) {
    e.preventDefault();
    const resposta = await fetch('http://localhost:3051/gastos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "titulo": nomeDespesa,
        "valorDespesa": valorDespesa
      })
    });
    
    if (resposta.ok) {
      setNotificacao({ mensagem: 'Cadastrado com sucesso!' });

      setTimeout(() => {
      setNotificacao(null);
      }, 3000);
    } else {
      setNotificacao({ mensagem: 'Erro ao cadastrar!' });
      setTimeout(() => {
      setNotificacao(null);
      }, 3000);
    }
  }

  return (
    <div className="flex items-center min-h-screen flex-col-reverse relative">
      {notificacao && (
        <div className="absolute top-20  p-4 rounded-lg text-white bg-blue-500">
          {notificacao.mensagem}
        </div>
      )}

      <div className="bg-gray-800 p-6 rounded-3xl w-full max-w-md fixed top-96">
        <h1 className="text-2xl text-center text-white mb-6">Cadastro de despesas</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            <label htmlFor="nome" className="text-white text-lg">Despesa:</label>
            <input
              type="text"
              id="nome"
              value={nomeDespesa}
              onChange={e => setNomeDespesa(e.target.value)}
              className="text-black p-2 rounded focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="valor" className="text-white text-lg">Valor da despesa:</label>
            <div className="flex items-center bg-gray-500 p-2 rounded">
              <span className="text-white mr-2">R$</span>
              <input
                type="number"
                id="valorDespesa"
                value={valorDespesa}
                onChange={e => setValorDespesa(e.target.value)}
                className="text-white bg-transparent outline-none w-full rounded"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <input
              type="submit"
              value="Inserir"
              className="bg-blue-700 text-white p-2 rounded cursor-pointer hover:bg-blue-500 active:bg-violet-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
