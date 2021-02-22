import React from "react";
import styled from "styled-components";
import appleLogo from "../assets/apple-logo.jpg";
import faceLogo from "../assets/face-logo.png";
import googleLogo from "../assets/google-logo.jpg";

const SmallText = styled.p`
  font-size: 80%;
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

const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
`

export default function Socials() {
  return (
    <Container>
      <br />
      <SmallText>OR</SmallText>
      <br />
      <SocialContainer>
        <SocialIcon src={faceLogo}></SocialIcon>
        <SocialIcon src={googleLogo}></SocialIcon>
        <SocialIcon src={appleLogo}></SocialIcon>
      </SocialContainer>
      <br />
    </Container>
  );
}
