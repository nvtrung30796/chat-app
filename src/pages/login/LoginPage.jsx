import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import SlackLogo from "../../shared/assets/images/logo-slack.png";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useNavigate, Navigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, provider} from "config/firebase";
import {ROUTE_NAME} from "../../routes/router.constant";
import { saveUserInfo } from "services/UserProfileService";


function LoginPage(props) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const onSignInWithGGAccount = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log('log::19 signInWithPopup user', user, token)
        if (user && token) {
          saveUserInfo(user)
          navigate(ROUTE_NAME.HOME);
        }
      }).catch((error) => {
      // Handle Errors here.
      console.log('log::22 signInWithPopup: error case: ', error)
    });
  }

  if(user) {
    return <Navigate to={ROUTE_NAME.HOME}/>

  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={SlackLogo} alt="SLack Logo" />
        <h1>Sign in</h1>

        <Button onClick={onSignInWithGGAccount}>Sign in with google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  background-color: #fafafa;
  height: 100vh;
  display: grid;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 200px;
  margin: 0 auto;
  height: 200px;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    background: green;
    color: white;
    margin-top: 20px
  }
`;
