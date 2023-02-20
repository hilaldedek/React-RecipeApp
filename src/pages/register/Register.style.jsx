import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

const LoginContainer= styled(Flex)`
  height: 100vh;
  background-color: #61876E;
`;
export const FormContainer= styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  background: #f8ede385;
  border-radius: 50%;
  border: 2px solid #f8ede385;
  padding: 0.5rem;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: #3C2A21;
  font-size: 3rem;
  @media (max-width: ${({theme})=>theme.screens.sm}) {
            font-size:2.5rem;

        }
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 1.5rem;
  width: 15rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 1rem;
  font-family: 'Quicksand', sans-serif;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  border: none;
  margin: 1rem;
  
  width: 50%;
  position: relative;
  margin: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  h4{
    position: relative;
    margin: auto;
    padding: 0.3rem;
  }
`;
export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;


export default LoginContainer;