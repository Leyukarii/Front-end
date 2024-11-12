import './App.css';
import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/Layout';
import CriarSessao from './pages/sessao/CriarSessao';
import ListaDeSessoes from './pages/sessao/ListarSessao';

function App() {
  return (
    <Routes>
       <Route path="/" element={<AppLayout></AppLayout>} />
       <Route path="/criarSessao" element={<AppLayout><CriarSessao/></AppLayout>} />
       <Route path="/sessoes" element={<AppLayout><ListaDeSessoes /></AppLayout>} />
       <Route path="/page3" element={<AppLayout></AppLayout>} />
    </Routes>
  );
}

export default App;
