import React from "react";
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";

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

export default function MInput({ textValue, label, handleChange }) {
  return (
    <LoginInput
      label = {label}
      color="primary"
      value={textValue}
      onChange={handleChange}
    />
  );
}
