import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive'
import notification from '../image/bell.svg'

const NavBar = (props) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="warp-navbar">
            {
                isTabletOrMobile ?
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    :
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="navbar-right-mb" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <img className="hvr-rotate" src={notification} alt="notification" />

                    </Navbar>

            }
        </div>
    );
}

export default NavBar;