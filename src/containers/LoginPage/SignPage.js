import React, { useState } from "react";
import styled from "styled-components";
import Background from "../../assets/surf-background.jpg";
import { AiOutlineLaptop } from "react-icons/ai";
import LoginComponent from "./LoginComponent";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 4fr;
  height: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImageBackground = styled.div`
  background: url(${Background}) no-repeat;
  background-size: cover;
  min-height: 100vh;

  @media (max-width: 800px) {
    background: none;
    min-height: 0;
  }
`;

const FlexDiv = styled.div`
  padding: 5% 5rem 2% 5rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    height: 0;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 160%;
  color: white;

  @media (max-width: 800px) {
    font-size: 110%;
  }
`;

const ContactUs = styled.span`
  text-decoration: underline;
  font-style: italic;
  font-size: small;
  :hover {
    cursor: pointer;
  }
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .underline {
    border-bottom: 2px solid #2596be;
  }

  .underline-hover {
    :hover {
      cursor: pointer;
      border-bottom: 2px solid #2596be;
      box-sizing: border-box;
    }
  }

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

const LoginAndRegisterContainer = styled.div`
  padding: 8rem 7rem 0 7rem;
  text-align: center;

  @media (max-width: 800px) {
    padding: 8rem 0;
  }
`;

const SmallTitle = styled.span`
  font-size: 80%;
`;

const LoginTitle = styled.span`
  font-size: 140%;
  margin: 0px 10px 0px 0px;
  border-bottom: 2px solid transparent;
  transition: all 0.4s ease-in-out;

  :hover {
    cursor: pointer;
  }
`;

const SignUp = styled.span`
  font-size: 140%;
  margin: 0px 10px 0px 10px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease-in-out;
`;

const LogoCss = styled(AiOutlineLaptop)`
  font-size: 210%;

  @media (max-width: 800px) {
    margin-right: 5px;
    font-size: 110%;
  }
`;

export default function SignPage() {
  const [isLogin, setIsLogin] = useState(true);

  const goToRegister = () => {
    setIsLogin(false);
  };

  const goToLogin = () => {
    setIsLogin(true);
  };

  return (
    <Container>
      <ImageBackground>
        <FlexDiv>
          <RowDiv>
            <LogoCss />
            <Logo>UI Design</Logo>
          </RowDiv>
          {isMobile ? <div /> : <ContactUs>Contact Us</ContactUs>}
        </FlexDiv>
      </ImageBackground>
      <LoginAndRegisterContainer>
        <RowDiv>
          <LoginTitle
            className={isLogin ? "underline" : "underline-hover"}
            onClick={goToLogin}
          >
            Login
          </LoginTitle>
          <SmallTitle>OR</SmallTitle>
          <SignUp
            className={!isLogin ? "underline" : "underline-hover"}
            onClick={goToRegister}
          >
            Sign up
          </SignUp>
        </RowDiv>
        {isLogin ? <LoginComponent /> : <div></div>}
      </LoginAndRegisterContainer>
    </Container>
  );
}
