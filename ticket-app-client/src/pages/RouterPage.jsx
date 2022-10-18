import React, { useContext } from 'react'
import {
  Routes,
  Link,
  Route,
  Navigate
} from 'react-router-dom'

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import IngresarPage from './IngresarPage'
import ColaPage from './ColaPage'
import CrearTicketPage from './CrearTicketPage'
import EscritorioPage from './EscritorioPage'
import { UiContext } from '../context/UiContext'
const { Sider, Content } = Layout

const RouterPage = () => {
  const { ocultarMenu } = useContext(UiContext)

  return (
    <>
      <Layout>
        <Sider
          hidden={ocultarMenu}
          style={{ height: '100vh' }}
          collapsedWidth='0'
          breakpoint='md'
        >
          <div className='logo' />
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to='/ingresar'>Ingresar</Link>
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: <Link to='/cola'>Cola</Link>
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: (
                  <Link to='/crear-ticket'>
                    Crear ticket
                  </Link>
                )
              }
            ]}
          />
        </Sider>
        <Layout className='site-layout'>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            <Routes>
              <Route
                path='/ingresar'
                element={<IngresarPage />}
              />
              <Route path='/cola' element={<ColaPage />} />
              <Route
                path='/crear-ticket'
                element={<CrearTicketPage />}
              />
              <Route
                path='/escritorio'
                element={<EscritorioPage />}
              />

              <Route
                path='*'
                element={<Navigate to='/ingresar' />}
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default RouterPage
