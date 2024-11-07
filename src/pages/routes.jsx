import { createBrowserRouter } from "react-router-dom";
import CriarSessao from './pages/CriarSessao';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/criarSessao",
        element: <CriarSessao />
      }
    ]
  }
]);
