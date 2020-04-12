import React from 'react'
import { Layout, Menu } from 'antd';



const Navbar = () => {

    const { Header } = Layout;
    const menu = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "About us",
            href: "#"
        },
        {
            name: "Products",
            href: "#"
        },
        {
            name: "Service",
            href: "#"
        },
        {
            name: "Gallary",
            href: "#"
        },
        {
            name: "Contact",
            href: "#"
        },
    ]

    return (
        <div className="warp-navbar">
            <Layout className="layout">
                <Header>
                    <div className="logo" >
                        <h1>Pets Shop</h1>
                    </div>
                    <Menu>
                        {
                            menu.map((item, index) => {
                                return (
                                    <Menu.Item key={index}><p>{item.name}</p></Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Header>
            </Layout>
        </div>
    )
}

export default Navbar;