import './App.css';
import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/Layout';
import CriarSessao from './pages/sessao/CriarSessao';
import ListaDeSessoes from './pages/sessao/ListarSessao';
import BuscarSessao from './pages/sessao/BuscarSessao';
import EditarSessao from './pages/sessao/EditarSessao';
import ExcluirSessao from './pages/sessao/ExcluirSessao';

//importa filmes
import BuscarFilme from './pages/filme/BuscarFilme'
import CriarFilme from './pages/filme/CriarFilme'
import EditarFilme from './pages/filme/EditarFilme'
import ExcluirFilme from './pages/filme/ExcluirFilme'
import ListarFilme from './pages/filme/ListarFilme'

//Importar Ingressos
import BuscarIngresso from './pages/ingresso/BuscarIngresso';
import CriarIngresso from './pages/ingresso/CriarIngresso';
import EditarIngresso from './pages/ingresso/EditarIngresso'; 
import ExcluirIngresso from './pages/ingresso/ExcluirIngresso';
import ListaDeIngressos from './pages/ingresso/ListarIngresso';

//Importar Sala
import CriarSala from './pages/sala/CriarSala';
import BuscarSala from './pages/sala/BuscarSala';
import EditarSala from './pages/sala/EditarSala';
import ExcluirSala from './pages/sala/ExcluirSala';
import ListarSala from './pages/sala/ListarSala';

//Importar Produto
import BuscarProduto from './pages/bombonier/BuscarProduto'
import CriarProduto from './pages/bombonier/CriarProduto'
import EditarProduto from './pages/bombonier/EditarProduto'
import ExcluirProduto from './pages/bombonier/ExcluirProduto'
import ListarProduto from './pages/bombonier/ListarProduto'

function App() {
  return (
    <Routes>
       <Route path="/" element={<AppLayout></AppLayout>} />
       <Route path="/criarSessao" element={<AppLayout><CriarSessao/></AppLayout>} />
       <Route path="/sessoes" element={<AppLayout><ListaDeSessoes /></AppLayout>} />
       <Route path="/buscarSessao" element={<AppLayout><BuscarSessao /></AppLayout>} />
       <Route path="/editarSessao" element={<AppLayout><EditarSessao /></AppLayout>} />
       <Route path="/excluirSessao" element={<AppLayout><ExcluirSessao /></AppLayout>} />

       <Route path="/criarFilme" element={<AppLayout><CriarFilme /></AppLayout>} />
       <Route path="/buscarFilme" element={<AppLayout><BuscarFilme /></AppLayout>} />
       <Route path="/editarFilme" element={<AppLayout><EditarFilme /></AppLayout>} />
       <Route path="/excluirFilme" element={<AppLayout><ExcluirFilme /></AppLayout>} />
       <Route path="/listarFilme" element={<AppLayout><ListarFilme /></AppLayout>} />

       <Route path="/criarIngresso" element={<AppLayout><CriarIngresso /></AppLayout>} />
       <Route path="/buscarIngresso" element={<AppLayout><BuscarIngresso /></AppLayout>} />
       <Route path="/editarIngresso" element={<AppLayout><EditarIngresso /></AppLayout>} />
       <Route path="/excluirIngresso" element={<AppLayout><ExcluirIngresso /></AppLayout>} />
       <Route path="/listarIngresso" element={<AppLayout><ListaDeIngressos /></AppLayout>} />

       <Route path="/criarSala" element={<AppLayout><CriarSala /></AppLayout>} />
       <Route path="/buscarSala" element={<AppLayout><BuscarSala /></AppLayout>} />
       <Route path="/editarSala" element={<AppLayout><EditarSala /></AppLayout>} />
       <Route path="/excluirSala" element={<AppLayout><ExcluirSala /></AppLayout>} />
       <Route path="/listarSala" element={<AppLayout><ListarSala /></AppLayout>} />

       <Route path="/criarProduto" element={<AppLayout><CriarProduto /></AppLayout>} />
       <Route path="/buscarProduto" element={<AppLayout><BuscarProduto /></AppLayout>} />
       <Route path="/editarProduto" element={<AppLayout><EditarProduto /></AppLayout>} />
       <Route path="/excluirProduto" element={<AppLayout><ExcluirProduto /></AppLayout>} />
       <Route path="/listarProduto" element={<AppLayout><ListarProduto /></AppLayout>} />
       
    </Routes>
  );
}

export default App;
