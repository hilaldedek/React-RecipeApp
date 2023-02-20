import React from 'react';
import LoginContainer, { FormContainer, StyledImg,Header, StyledForm, StyledInput, StyledButton }  from './Login.style';
import imglogin from "../../assets/halo-halo.png";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Login = ({recipes}) => {
  const navigate =useNavigate();
  const {state}=useLocation();
  console.log("state geldi mi?: ",state);
 
  const[cusername,setcUsername]=useState('');
  const[cpassword,setcPassword]=useState('');
  
  const control =()=>{
  const usernameInfo= JSON.stringify(localStorage.getItem('username'));
  const passwordInfo=JSON.stringify(localStorage.getItem('password'));
  
  const usernameInfostr= usernameInfo.substring(1, usernameInfo.length - 1);
  console.log(usernameInfostr);
  const passwordInfostr= passwordInfo.substring(1, passwordInfo.length - 1);
  console.log(usernameInfostr);
  
  console.log(usernameInfo,passwordInfo);
    if (cusername === usernameInfostr && cpassword === passwordInfostr) {
    navigate("/detail",{state:state, replace:true})
  } else {

    console.log(cusername,cpassword);
    alert("yanlış");
   
  }
  }
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   navigate(-1);
  // }

  
  return (
    <LoginContainer>
      
          <FormContainer >
            <StyledImg src={imglogin}/>
            <Header>
              Chef Crescent
            </Header>
            <StyledForm >
              <StyledInput placeholder="user name" type="text" id='name' value={cusername} onChange={e=>setcUsername(e.target.value)}/>
              <StyledInput placeholder='password' type="password" id='password' value={cpassword} onChange={e=>setcPassword(e.target.value)} />
              <StyledButton type='button' onClick={control} onKeyDown><h4>Login</h4></StyledButton>
              <p>If you do not have a registered account</p>
              <StyledButton type='submit'onClick={()=>navigate("/register",{state:state,replace:false})}>
                <h4>Sign Up</h4>
              </StyledButton>
            </StyledForm>
        </FormContainer>
       
        
    </LoginContainer>
  )
}

export default Login

// ()=>navigate("/detail",{state:state, replace:false})