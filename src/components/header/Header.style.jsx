import styled from 'styled-components';
import Flex from '../globalStyles/Flex.style';

export const HeaderContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.bgColor};
  flex-direction: column;
`;

export const MainHeader = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
  color:${({ theme }) => theme.colors.navbarBgColor};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
  border-color: #ffcca8b3;
`;

export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  font-family: 'Quicksand', sans-serif;
  
`;

export const Button = styled.button`
  /* background: ${({ theme }) => theme.colors.navbarBgColor}; */
  background-color: #ffcca8d3;
  color: black;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.navbarBgColor};
    transition: all 0.3s ease-in;
    border: 1px solid white;
    color: black;
    
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
`;