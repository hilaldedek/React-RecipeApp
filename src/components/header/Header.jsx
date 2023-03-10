import React from 'react';
import "./Header.style";
import { FoodInput, FormContainer, HeaderContainer, MainHeader,Button, Select } from './Header.style';

const Header = ({setQuery,setSelectedMeal,mealType,getData}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }
  return (
    <HeaderContainer>
        <MainHeader>
            RECIPE
        </MainHeader>
        <FormContainer onSubmit={handleSubmit}>
            <FoodInput type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
            <Button type='submit'>Search</Button>
            <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </Select>
        </FormContainer>

    </HeaderContainer>
  );
};

export default Header;