import React, { useState } from 'react';
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
    const [items, setItem] = useState(
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

    )

    return (
        <div className="warp-navbar">
            {
                isTabletOrMobile ?
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <FontAwesomeIcon icon={faAlignRight} />
                        </Nav>

                    </Navbar>
                    :
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            {
                                items.map((item, index) => (
                                    <NavItem>
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