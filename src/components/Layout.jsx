import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index';
import { Button, Layout, theme } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import ToggleThemeButton from './ToggleThemeButton';

const { Header, Sider } = Layout;

function AppLayout(props) {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgontainer },
    } = theme.useToken();

    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
     <>
    <Layout>
      <Sider theme={darkTheme ? 'dark' : 'light'} className="sidebar" collapsed={collapsed} collapsible trigger={null}>
        <Link to="/"><Logo /></Link>
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgontainer }}>
          <Button type='text' className="toggle" onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
        </Header>
        <main className="content">{props.children}</main>
      </Layout>
    </Layout>
    
     </>
    );
  }
  export default AppLayout;