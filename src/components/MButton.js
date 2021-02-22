import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MButtonStyle = styled.div`
   width: 100%;

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

export default function MButton(props) {
  const requestFunction = () => {
    props.onClickFunction();
  };

  return (
    <MButtonStyle>
      <Button className="button" variant="contained" onClick={requestFunction}>
        {props.text}
      </Button>
    </MButtonStyle>
  );
}
