import React, { useState } from "react";
import styled from "styled-components";
import Input from "@material-ui/core/Input";
import MButton from "../../components/MButton";
import { LoginService } from "../../services";
import Grow from "@material-ui/core/Zoom";
import MPassword from "../../components/MPassword";
import MInput from "../../components/MInput";
import Socials from "../../components/Socials";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #969ca5;
`;

const Form = styled.form`
  margin-top: 4rem;
  width: 100%;

  .full-width {
    width: 100%;
  }

  .color-grey {
    color: #969ca5;
  }
`;

const PasswordInput = styled(Input)`
  width: 100%;

  .MuiInputBase-input {
    color: #969ca5;
  }
`;

const SpaceElements = styled.div`
  padding-top: 2rem;
`;

const Password = styled.p`
  text-align: right;
  font-size: 80%;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const A = styled.a`
  color: #0683a0;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const SmallText = styled.p`
  font-size: 80%;
`;

export default function LoginComponent() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const changeVisibility = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  const handleChange = (prop) => (event) => {
    setLogin({ ...login, [prop]: event.target.value });
  };

  const requestLogin = () => {
    LoginService.login(login.email, login.password);
  };

  return (
    <Grow in>
      <Container>
        <Form autoComplete="off">
          <MInput
            label="Email ID"
            value={login.email}
            handleChange={handleChange("email")}
          />
          <SpaceElements />
          <MPassword
            password={login.password}
            handlePassword={handleChange("password")}
          />
          <br />
          <Password>Forgot password?</Password>
          <SpaceElements />
          <MButton text="Login" onClickFunction={requestLogin} />
        </Form>
        <Socials />
        <SmallText>
          Don't have an account? <A href="">Sign up</A>
        </SmallText>
      </Container>
    </Grow>
  );
}
