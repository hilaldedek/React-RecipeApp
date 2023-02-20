import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homepng from "../../assets/home.png";

const Home = () => {
  const APP_ID="3f49ff14";
  const APP_KEY="b2be578fd5005a1f3c8d6c911a8e17d0";
  const [query,setQuery]=useState("egg");
  const [selectedMeal,setSelectedMeal]=useState("breakfast");
  const [recipes,setRecipes]=useState(null);
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  const mealType=["Breakfast","Lunch","Dinner","Snack","Teatime"];
  
  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the Form");
    }
  };
  console.log(recipes);

  // useEffect(() => {
  //   getData();
  // }, []);

  


  return (
    <div>
      <Header setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        getData={getData}
        mealType={mealType} />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={homepng} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found
          
        </HeaderText> 
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;