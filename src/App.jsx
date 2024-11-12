import './App.css';
import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/Layout';
import CriarSessao from './pages/sessao/CriarSessao';
import ListaDeSessoes from './pages/sessao/ListarSessao';
import BuscarSessao from './pages/sessao/BuscarSessao';
import EditarSessao from './pages/sessao/EditarSessao';
import ExcluirSessao from './pages/sessao/ExcluirSessao';

function App() {
  return (
    <Routes>
       <Route path="/" element={<AppLayout></AppLayout>} />
       <Route path="/criarSessao" element={<AppLayout><CriarSessao/></AppLayout>} />
       <Route path="/sessoes" element={<AppLayout><ListaDeSessoes /></AppLayout>} />
       <Route path="/buscarSessao" element={<AppLayout><BuscarSessao /></AppLayout>} />
       <Route path="/editarSessao" element={<AppLayout><EditarSessao /></AppLayout>} />
       <Route path="/excluirSessao" element={<AppLayout><ExcluirSessao /></AppLayout>} />
    </Routes>
  );
}

export default App;
