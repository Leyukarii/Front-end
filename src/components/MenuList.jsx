import { Menu } from "antd";
import { CalendarOutlined, VideoCameraOutlined, UserOutlined, TagOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const MenuList = ({ darkTheme }) => {
  console.log("MenuList renderizado!");

  const items = [
    {
      key: 'subSessao',
      icon: <CalendarOutlined />,
      label: 'Sessões',
      children: [
        {
          key: 'criarSessao',
          label: <Link to="/criarSessao">Adicionar Sessão</Link>,
        },
        { key: 'listarSessao',
          label: <Link to="/sessoes">Listar Sessões</Link>
        },
        { key: 'buscarSessao', 
          label: <Link to="/buscarSessao">Buscar Sessão</Link>
        },
        { key: 'editarSessao', 
          label: <Link to="/editarSessao">Editar Sessão</Link>
        },
        { key: 'excluirSessao', 
          label: <Link to="/excluirSessao">Excluir Sessão</Link>
        },
      ],
    },
    {
      key: 'subFilme',
      icon: <VideoCameraOutlined />,
      label: 'Filmes',
      children: [
        { key: 'criarFilme', label: 'Adicionar Filme' },
        { key: 'listarFilme', label: 'Listar Filme' },
        { key: 'buscarFilme', label: 'Buscar Filme' },
        { key: 'editarFilme', label: 'Editar Filme' },
        { key: 'excluirFilme', label: 'Excluir Filme' },
      ],
    },
    {
      key: 'subUsuarios',
      icon: <UserOutlined />,
      label: 'Usuários',
      children: [
        { key: 'criarUsuario', label: 'Adicionar Usuário' },
        { key: 'listarUsuario', label: 'Listar Usuário' },
        { key: 'buscarUsuario', label: 'Buscar Usuário' },
        { key: 'editarUsuario', label: 'Editar Usuário' },
        { key: 'excluirUsuario', label: 'Excluir Usuário' },
      ],
    },
    {
      key: 'subIngressos',
      icon: <TagOutlined />,
      label: 'Ingressos',
      children: [
        { key: 'criarIngresso', 
        label: <Link to='/criarIngresso'>Adicionar Ingresso</Link> },
        { key: 'listarIngresso',
        label: <Link to='/listarIngresso'>Listar Ingressos</Link> },
        { key: 'buscarIngresso',
        label: <Link to='/buscarIngresso'>Buscar Ingresso</Link>},
        { key: 'editarIngresso',
        label: <Link to='/editarIngresso'>Editar Ingresso</Link> },
        { key: 'excluirIngresso',
        label: <Link to='/excluirIngresso'>Excluir Ingresso</Link>},
      ],
    },
    {
      key: 'subSalas',
      icon: <ShopOutlined />,
      label: 'Salas',
      children: [
        { key: 'criarSala', label: 'Adicionar Sala' },
        { key: 'listarSala', label: 'Listar Sala' },
        { key: 'buscarSala', label: 'Buscar Sala' },
        { key: 'editarSala', label: 'Editar Sala' },
        { key: 'excluirSala', label: 'Excluir Sala' },
      ],
    },
    {
      key: 'subBomboniere',
      icon: <ShoppingCartOutlined />,
      label: 'Bomboniere',
      children: [
        { key: 'criarBomboniere', label: 'Adicionar Bomboniere' },
        { key: 'listarBomboniere', label: 'Listar Bomboniere' },
        { key: 'buscarBomboniere', label: 'Buscar Bomboniere' },
        { key: 'editarBomboniere', label: 'Editar Bomboniere' },
        { key: 'excluirBomboniere', label: 'Excluir Bomboniere' },
      ],
    },
  ];

  return <Menu mode="inline" className="menu-bar" theme={darkTheme ? 'dark' : 'light'} items={items} />;
};

export default MenuList;
