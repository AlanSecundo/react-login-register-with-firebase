import React, { useState } from "react";
import Grow from "@material-ui/core/Zoom";
import styled from "styled-components";
import MButton from "../../components/MButton";
import MPassword from "../../components/MPassword";
import MInput from '../../components/MInput';
import Socials from '../../components/Socials';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpaceElements = styled.div`
  padding-top: 2rem;
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

export default function RegisterComponent() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = () => {
    console.log(data);
  };

  const handleChange = (props) => (event) => {
    setData({ ...data, [props]: event.target.value });
  };

  return (
    <Grow in>
      <Container>
      <SpaceElements />
        <MInput
          label="Name"
          value={data.name}
          handleChange={handleChange("name")}
        />
        <SpaceElements />
        <MInput
          label="Email ID"
          value={data.email}
          handleChange={handleChange("email")}
        />
        <SpaceElements />
        <MPassword
          password={data.password}
          handlePassword={handleChange("password")}
        />
        <SpaceElements />
        <MButton text="Register" onClickFunction={register} />
        <Socials />
        <SmallText>
          Already have an account? <A href="">Login</A>
        </SmallText>
      </Container>
    </Grow>
  );
}
