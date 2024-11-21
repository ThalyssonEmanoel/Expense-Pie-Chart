'use client'
import { useState } from "react";

export default function Home() {

  const [nomeDespesa, setNomeDespesa] = useState('');
  const [valorDespesa, setValorDespesa] = useState('');
  const [notificacao, setNotificacao] = useState(null); 

  /**
   * @handleSubmit Função para enviar os dados da despesa para o backend
   * */ 
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
      setNotificacao({ tipo: 'success', mensagem: 'Cadastrado com sucesso!' });
      setTimeout(() => setNotificacao(null), 3000);
      
      setNomeDespesa('');
      setValorDespesa('');
    } else {
      setNotificacao({ tipo: 'error', mensagem: 'Erro ao cadastrar!' });
      setTimeout(() => setNotificacao(null), 3000);
    }
  }

  /**
   * @handleExcluir Irá excluir os dados
   */
  async function handleExcluir() {
    const resposta = await fetch('http://localhost:3051/gastos', {
      method: 'DELETE',
    });

    if (resposta.ok) {
      setNotificacao({ tipo: 'success', mensagem: 'O último gasto foi excluído!' });
      setTimeout(() => setNotificacao(null), 3000);
    } else {
      setNotificacao({ tipo: 'error', mensagem: 'Erro ao excluir os gastos!' });
      setTimeout(() => setNotificacao(null), 3000);
    }
  }

  return (
    <div className="flex items-center min-h-screen flex-col-reverse relative">
      {notificacao && (
        <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 p-4 rounded-lg text-white ${notificacao.tipo === 'success' ? 'bg-black' : 'bg-red-500'}`}>
          {notificacao.mensagem}
        </div>
      )}

      <div className="bg-black p-6 rounded-3xl w-full max-w-md fixed top-96">
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
          <div className="flex items-center justify-center ">
            <div className="text-center mt-4 mr-10">
              <input
                type="submit"
                value="Inserir"
                className="bg-blue-700 text-white p-2 rounded cursor-pointer hover:bg-blue-500 "
              />
            </div>
            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleExcluir}
                className="bg-red-700 text-white p-2 rounded cursor-pointer hover:bg-red-500 active:bg-red-800"
              >
                Excluir 
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
