import React from 'react';
import { Button, Card, Header, Image, MainContainer } from "./Cards.style";
import defaultimage from "../../assets/home.png";
import { useNavigate } from 'react-router-dom';

const Cards = ({recipes}) => {
  const navigate=useNavigate();
  return (
    
        <MainContainer wrap="wrap">

        
            {recipes?.map(({recipe},index)=>{
                
                return(
                    <Card key={index}>
                        <Header>
                            {recipe.label}
                        </Header>
                        <Image src={recipe.image || defaultimage}/>
                        <Button
            onClick={() =>
            navigate("/login",{state:recipe,replace:false})}
            >View More</Button>
                    </Card>
                );
            })};
        </MainContainer>
   
  );
};

export default Cards;