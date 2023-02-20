import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const Nav=styled(Flex)`
    padding:1rem 1.5rem;
`;
export const Brand=styled(Link)`
    padding: 1rem 0;
    color:${({theme})=>theme.colors.navbarColor};
    text-decoration: none;
    font-weight: 800;
    font-size: 2rem;
`;
export const Menu=styled(Flex)`
    @media (max-width: ${({theme})=>theme.screens.lg}) {
            flex-direction: column;
            width: 100%;
            max-height: ${({isOpen})=>(isOpen ? "400px" : "0")};
            overflow: hidden;

        }

`;
export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.BgColor};
    font-weight: bold;
  }
  @media (max-width: ${({theme})=>theme.screens.lg}) {
        width: 100%;
        border-bottom: 2px solid ${({theme})=>theme.colors.navbarColor};
    }
  
`;
export const Hamburger=styled.div`
    display: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mainColor};
    @media (max-width: ${({theme})=>theme.screens.lg}) {
        display: block;
    }
`;
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  h2{
     @media (max-width: ${({theme})=>theme.screens.km}) {
            font-size:2rem;

        }
    @media (max-width: ${({theme})=>theme.screens.hm}) {
            font-size:1.8rem;

        }
  }
 
  
  
`;


