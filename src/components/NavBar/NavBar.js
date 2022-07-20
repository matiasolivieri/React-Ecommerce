import React, {useState} from "react";
import { IconLogo, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper, Menu, IconLogoMobile } from "./NavBar.elements"
import { FaBars, FaTimes } from "react-icons/fa"
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick(!click);
    };
  return (
    <>
    <NavbarContainer>
        <NavbarWrapper>
            <IconLogo> 
            TecnoPC 
            </IconLogo>
            <IconLogoMobile onClick = { () => ChangeClick() }>
                {click ? <FaTimes/> : <FaBars/>}
            </IconLogoMobile>
            <Menu click = {click}>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> INICIO </MenuItemLink>
                </MenuItem>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> CONTACTO </MenuItemLink>
                </MenuItem>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> REGLAS </MenuItemLink>
                </MenuItem>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> SERVICIOS </MenuItemLink>
                </MenuItem>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> OFERTAS </MenuItemLink>
                </MenuItem>
                <CartWidget/>
            </Menu>
        </NavbarWrapper>
    </NavbarContainer> 
    </>
  )
}

export default NavBar;