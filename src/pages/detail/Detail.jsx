import React from 'react';
import { DetailContainer, DetailPart, HeaderContainer, OtherPart,ImgContainer,IngContainer } from './Detail.style';
import { useLocation } from 'react-router-dom';



const Detail = () => {
  const {state}=useLocation();
  console.log("state geldi mi?: ",state);
  return (
    <DetailContainer>
      
      <HeaderContainer>
        <h1>
          {state.label}
        </h1>
      </HeaderContainer>
      <DetailPart>
      <OtherPart>
        <h4>NUTRIENTS</h4>
        
          <p>
            <b><span>{state.totalNutrients.CA.label} :</span></b>{' '}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            <b><span>{state.totalNutrients.CHOCDF.label} :</span></b>{' '}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            <b><span>{state.totalNutrients.CHOLE.label} :</span></b>{' '}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            <b><span>{state.totalNutrients.ENERC_KCAL.label} :</span></b>{' '}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p><b><span>Calories:</span></b> {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
             <b><span>{item.label} :</span></b>  {Math.round(item.total)}
            </p>
          ))}
      </OtherPart>

      <ImgContainer>
      <img src={state.image} alt="default" />
      </ImgContainer>

      <IngContainer>
        <h4>INGREDIENTS</h4>
        {state.ingredientLines.map((ingredient,index)=>(
          <div>
            <p><b><span>{index+1}-</span></b>  {ingredient}</p>
          </div>
        ))}
      </IngContainer>

    </DetailPart>
    </DetailContainer>
  )
}

export default Detail