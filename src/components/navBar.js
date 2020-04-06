import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarText,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'

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
                        <FontAwesomeIcon icon={faAlignRight} />
                    </Navbar>
                    :
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarText>Simple Text</NavbarText>
                    </Navbar>

            }
        </div>
    );
}

export default NavBar;