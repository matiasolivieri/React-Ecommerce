import React, {useState} from "react";
import { IconLogo, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper, Menu, IconLogoMobile } from "./NavBar.elements"
import { AiFillTool } from "react-icons/ai" 
import { FaBars, FaTimes } from "react-icons/fa" 

const NavBar = () => {
    const [click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick(!click);
        //console.log(click);
    };
  return (
    <>
    <NavbarContainer>
        <NavbarWrapper>
            <IconLogo> 
            <AiFillTool size={"2em"}/>
            TecnoPC 
            </IconLogo>
            <IconLogoMobile onClick = { () => ChangeClick() }>
                {click ? <FaTimes/> : <FaBars/>}
            </IconLogoMobile>
            <Menu click = {click}>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> HOME </MenuItemLink>
                </MenuItem>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> TIENDA </MenuItemLink>
                </MenuItem>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> OFERTAS </MenuItemLink>
                </MenuItem>
                <MenuItem onClick = { () => ChangeClick() }>
                    <MenuItemLink> CONTACTO </MenuItemLink>
                </MenuItem>
            </Menu>
        </NavbarWrapper>
    </NavbarContainer> 
    </>
  )
}

export default NavBar;