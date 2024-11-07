import { Menu } from "antd"
import { HomeOutlined, CalendarOutlined, VideoCameraOutlined, UserOutlined, TagOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const MenuList = ({darkTheme}) => {
  return <Menu mode="inline" className="menu-bar" theme={darkTheme ? 'dark' : 'light'}>
    <Menu.SubMenu key="subSessao" icon={<CalendarOutlined />} title="Sessões">
        <Menu.Item key="criarSessao">
            <Link to="/criarSessao">Adicionar Sessão</Link>
        </Menu.Item>
        <Menu.Item key="listarSessao">Listar Sessão</Menu.Item>
        <Menu.Item key="buscarSessao">Buscar Sessão</Menu.Item>
        <Menu.Item key="editarSessao">Editar Sessão</Menu.Item>
        <Menu.Item key="excluirSessao">Excluir Sessão</Menu.Item>
    </Menu.SubMenu>

    <Menu.SubMenu key="subFilme" icon={<VideoCameraOutlined />} title="Filmes">
        <Menu.Item key="criarFilme">Adicionar Filme</Menu.Item>
        <Menu.Item key="listarFilme">Listar Filme</Menu.Item>
        <Menu.Item key="buscarFilme">Buscar Filme</Menu.Item>
        <Menu.Item key="editarFilme">Editar Filme</Menu.Item>
        <Menu.Item key="excluirFilme">Excluir Filme</Menu.Item>
    </Menu.SubMenu>

    <Menu.SubMenu key="subUsuarios" icon={<UserOutlined />} title="Usuários">
        <Menu.Item key="criarUsuario">Adicionar Usuário</Menu.Item>
        <Menu.Item key="listarUsuario">Listar Usuário</Menu.Item>
        <Menu.Item key="buscarUsuario">Buscar Usuário</Menu.Item>
        <Menu.Item key="editarUsuario">Editar Usuário</Menu.Item>
        <Menu.Item key="excluirUsuario">Excluir Usuário</Menu.Item>
    </Menu.SubMenu>

    <Menu.SubMenu key="subIngressos" icon={<TagOutlined />} title="Ingressos">
        <Menu.Item key="criarIngresso">Adicionar Ingresso</Menu.Item>
        <Menu.Item key="listarIngresso">Listar Ingresso</Menu.Item>
        <Menu.Item key="buscarIngresso">Buscar Ingresso</Menu.Item>
        <Menu.Item key="editarIngresso">Editar Ingresso</Menu.Item>
        <Menu.Item key="excluirIngresso">Excluir Ingresso</Menu.Item>
    </Menu.SubMenu>

    <Menu.SubMenu key="subSalas" icon={<ShopOutlined />} title="Salas">
        <Menu.Item key="criarSala">Adicionar Sala</Menu.Item>
        <Menu.Item key="listarSala">Listar Sala</Menu.Item>
        <Menu.Item key="buscar Sala">Buscar Sala</Menu.Item>
        <Menu.Item key="editarSala">Editar Sala</Menu.Item>
        <Menu.Item key="excluirSala">Excluir Sala</Menu.Item>
    </Menu.SubMenu>

    <Menu.SubMenu key="subBomboniere" icon={<ShoppingCartOutlined />} title="Bomboniere">
        <Menu.Item key="criarBomboniere">Adicionar Bomboniere</Menu.Item>
        <Menu.Item key="listarBomboniere">Listar Bomboniere</Menu.Item>
        <Menu.Item key="buscarBomboniere">Buscar Bomboniere</Menu.Item>
        <Menu.Item key="editarBomboniere">Editar Bomboniere</Menu.Item>
        <Menu.Item key="excluirBomboniere">Excluir Bomboniere</Menu.Item>
    </Menu.SubMenu>
  </Menu>
}

export default MenuList
