import * as React from 'react'
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
// } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'
import menus from './menus'
import './index.css'

const { Header, Content, Footer, Sider } = Layout

export default function Home() {
    const [ collapsed, setCollapsed ] = React.useState(false)
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme='dark' defaultSelectedKeys={['1']} mode="inline" items={menus} />
            </Sider>
            <Layout className="site-layout">
                <Header 
                    className="site-layout-background"
                />
                <Content 
                    style={{
                        margin: '0 16px'
                    }}
                >
                    <Breadcrumb 
                        style={{
                            margin: '16px 0'
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div 
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        bocil is a cat
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Food Store ©2022 Created by Felix.
                </Footer>
            </Layout>
        </Layout>
    )
}
