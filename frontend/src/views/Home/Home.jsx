import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bem vindo ao Carboard, dashboard de carros</h1>
      <p>Esta aplicação foi feita utilizando:</p>
      <ul>
        <li>Mysql</li>
        <li>NodeJS 20.x</li>
        <li>Express API</li>
        <li>React Vite</li>
        <li>Docker</li>
      </ul>
      <p>Funcionalidades:</p>
      <ul>
        <li>Listar carros</li>
        <li>Adicionar carro</li>
        <li>Editar carro</li>
        <li>Excluir carro</li>
      </ul>
      <p>Feito por Matheus Julidori para a disciplina C216-L1</p>
    </div>
  );
};

export default Home;