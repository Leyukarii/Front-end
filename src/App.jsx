import { useState } from 'react'
import './index.css'
import { Button, Layout, theme } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import ToggleThemeButton from './components/ToggleThemeButton';
import { router } from '../src/pages/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

const {Header, Sider} = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const{
    token: {colorBgontainer},
  } = theme.useToken();

  const [darkTheme, setDarkTheme] = useState (false);
  const toggleTheme= () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <Layout>
      <Sider theme={darkTheme ? 'dark' : 'light'} className="sidebar" collapsed={collapsed} collapsible trigger={null}>
        <Logo />
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgontainer}}>
          <Button type='text' className="toggle" onClick={() => setCollapsed(!collapsed)}
          icon={collapsed ?
            <MenuUnfoldOutlined /> : <MenuFoldOutlined/>}></Button>

        </Header> 
      </Layout>
    </Layout>
  );
}

export default App
