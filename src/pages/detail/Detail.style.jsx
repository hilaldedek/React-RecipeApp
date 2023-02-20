import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex.style';

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background: #61876E;
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
 
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #FFFFE8;
  @media (max-width: ${({theme})=>theme.screens.bm}) {
            flex-direction: column;
            width: 100%;
            overflow: hidden;

        }
`;

export const ImgContainer = styled.div`
  border: 1px solid #C55300;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled(Flex)`
  margin: 25px;
  img {
    width: 200px;
  }
  h1{
    color:#ffe8a2;
  }
  @media (max-width: ${({theme})=>theme.screens.zm}) {
    h1{
      text-align :center;
    }
           }
`;

export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
  p,span{
    font-family: 'Quicksand', sans-serif;
  }
  span{
    color:#b59229;;
    
  }
  h4{
    font-size: 1.8rem;
    color:#C55300;
  }
  @media (max-width: ${({theme})=>theme.screens.bm}) {
           text-align :center;
          font-size: 1rem;

        }
`;

export const OtherPart = styled.div`
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
  p,span{
    font-family: 'Quicksand', sans-serif;
  }
  span{
    color:#b59229;
  }
  h4{
    color:#C55300;
  }
  @media (max-width: ${({theme})=>theme.screens.bm}) {
           text-align :center;

        }
`;
