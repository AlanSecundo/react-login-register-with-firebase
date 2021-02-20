import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { LoginService } from "../../services/";
import appleLogo from "../../assets/apple-logo.jpg";
import faceLogo from "../../assets/face-logo.png";
import googleLogo from "../../assets/google-logo.jpg";

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

  .button {
    color: white;
    background-color: #0683a0;
    width: 100%;
    padding: 10px;
    text-transform: none;
  }

  .button:hover {
    background-color: #026b82;
  }
`;

const LoginInput = styled(TextField)`
  width: 100%;

  .MuiFormLabel-root {
    color: #969ca5;
  }

  .MuiInputBase-root {
    color: #969ca5;
  }

  .MuiIconButton-root {
    color: #969ca5;
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid #969ca5;
    color: white;
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

const SocialContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SocialIcon = styled.img`
  border-radius: 7px;
  width: 36px;
  height: 36px;
  background-color: white;
  padding: 5px;
  :hover {
    cursor: pointer;
  }
`;

const A = styled.a`
  color: #0683a0;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const SmallText = styled.p`
  font-size: 80%;
`

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
    <Container>
      <Form autoComplete="off">
        <LoginInput
          label="Email ID"
          color="primary"
          value={login.email}
          onChange={handleChange("email")}
        />
        <SpaceElements />
        <FormControl className="full-width">
          <InputLabel htmlFor="password" className="color-grey">
            Password
          </InputLabel>
          <PasswordInput
            id="password"
            type={passwordIsVisible ? "text" : "password"}
            color="primary"
            value={login.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={changeVisibility}
                >
                  {passwordIsVisible ? (
                    <Visibility className="color-grey" />
                  ) : (
                    <VisibilityOff className="color-grey" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <br />
        <Password>Forgot password?</Password>
        <SpaceElements />
        <Button className="button" variant="contained" onClick={requestLogin}>
          Login
        </Button>
      </Form>
      <br />
      <SmallText>OR</SmallText>
      <br />
      <SocialContainer>
        <SocialIcon src={faceLogo}></SocialIcon>
        <SocialIcon src={googleLogo}></SocialIcon>
        <SocialIcon src={appleLogo}></SocialIcon>
      </SocialContainer>
      <br/>
      <SmallText>
        Don't have an account? <A href="">Sign up</A>
      </SmallText>
    </Container>
  );
}
