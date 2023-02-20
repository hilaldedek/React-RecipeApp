import styled from 'styled-components';


export const Image = styled.img`
  height: 20rem;
  border-radius: 10px;
  margin:5rem;
`;
export const Img= styled.img`
  height: 5rem;
  margin: 2rem;

`;
export const StyledButton = styled.button`
  font-size: 1.5rem;
  background: #addebf96;
  border-radius: 5px;
  color: #4d2b06;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  a{
    text-decoration: none;
    color: #4d2b06;
  }
`;
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  @media (max-width: ${({theme})=>theme.screens.mg}) {
            flex-direction: column;
            width: 100%;
            overflow: hidden;

        }
`;