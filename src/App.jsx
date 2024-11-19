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
    </Routes>
  );
}

export default App;
