import styled from 'styled-components';

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
  `;

export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;

export const HeaderText = styled.h1`
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 2.5rem;
  color: ${({theme})=>theme.colors.navbarBgColor};
  text-align: center;
  background-color: #a83c3cdc;
`;