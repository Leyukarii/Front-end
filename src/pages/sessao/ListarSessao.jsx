import React, { useEffect, useState } from 'react';

function ListaDeSessoes() {
  const [sessoes, setSessoes] = useState([]);
  const [erro, setErro] = useState(null);

 
  useEffect(() => {
    async function buscarSessoes() {
      try {
        const resposta = await fetch('http://localhost:5081/sessoes'); // Substitua pela sua URL da API
        if (!resposta.ok) throw new Error('Erro ao buscar sessões');
        const dados = await resposta.json();
        setSessoes(dados);
      } catch (erro) {
        setErro(erro.message);
      }
    }
    buscarSessoes();
  }, []);

  // Renderização da lista ou da mensagem de erro
  return (
    <div>
      <h1>Lista de Sessões Disponíveis</h1>
      {erro && <p>Erro: {erro}</p>}
      <ul>
        {sessoes.map((sessao) => (
          <li key={sessao.id}>{sessao.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeSessoes;
