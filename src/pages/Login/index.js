import React from "react";
import FacebookLogin from "react-facebook-login";

import { Container } from "./styles";

export default function Login() {
  function handleLogin(response) {
    console.log(response);
  }
  return (
    <Container>
      <FacebookLogin
        appId="--APP-ID-FACEBOOK--"
        autoLoad
        fields="name,email,picture,id"
        scope="instagram_basic,instagram_manage_comments,instagram_manage_insights,pages_show_list"
        callback={handleLogin}
      />
    </Container>
  );
}
