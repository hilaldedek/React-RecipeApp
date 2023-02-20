import React from 'react';
import LoginContainer, { FormContainer, StyledImg,Header, StyledForm, StyledInput, StyledButton }  from './Register.style';
import imglogin from "../../assets/halo-halo.png";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigate =useNavigate();
  const {state}=useLocation();
  console.log("state geldi mi?: ",state);
 
  
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  
console.log(username,password);

window.localStorage.setItem('username',username);
window.localStorage.setItem('password',password);
    
  
  return (
    <div>
      <LoginContainer>
        <FormContainer>
            <StyledImg src={imglogin}/>
            <Header>
              Chef Crescent
            </Header>
            <StyledForm >
              <StyledInput placeholder="user name" type="text"id="name" value={username} onChange={e=>setUsername(e.target.value)}/>
              <StyledInput placeholder='password' type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)}/>
              <StyledButton type='submit'onClick={()=>navigate("/login",{state:state, replace:false})}><h4>Sign Up</h4>
              </StyledButton>
            </StyledForm>
        </FormContainer>
    </LoginContainer>
    </div>
  );
  };

export default Register