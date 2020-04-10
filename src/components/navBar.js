import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'


const NavBar = (props) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const title = "Nuntium"
    const items =
        [
            {
                name: "Home",
                link: "#",
            },
            {
                name: "Contact",
                link: "#",
            },
        ]


    return (
        <div className="warp-navbar">
            {
                isTabletOrMobile ?
                    <Navbar expand="md">
                        <NavbarBrand href="/">{title}</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <FontAwesomeIcon icon={faAlignRight} />
                        </Nav>

                    </Navbar>
                    :
                    <Navbar expand="md">
                        <NavbarBrand href="/">{title}</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            {
                                items.map((item, index) => (
                                    <NavItem key={index}>
                                        <NavLink href={item.link}>
                                            {item.name}
                                        </NavLink>
                                    </NavItem>
                                ))
                            }
                            <NavItem>
                                <NavLink href="#">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Navbar>

            }
        </div>
    );
}

export default NavBar;