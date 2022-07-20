import styled from 'styled-components';

export const NavbarContainer = styled.div`
width: 100%;
height: 88px;
position: sticky;
top: 0;
z-index: 99;
background-color: #0F0E0E;
`;

export const NavbarWrapper = styled.div`
margin-left: -10px;
width: 100%;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
color: #898888
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Oswald";
font-size: 1.2rem;
color: #898888;
padding-left: 1rem;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 968px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? 0 : "-100%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #49426c;
}
`;

export const MenuItem =styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Oswald';
    font-weight: 400;

    &:hover{
        background-color: #B6B1B1;
        border-bottom: 0.3rem solid #ebc88b;
        transition: 0.4s ease-in;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
    }
`;

export const MenuItemLink = styled.a`
    text-decoration: none;
    color: #898888;
`;

export const IconLogoMobile = styled.div`
display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        color: #ebc08b;
        font-size: 2rem;
        padding-right: 1rem;
    }
`;