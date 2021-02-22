import React, { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const MFormControl = styled(FormControl)`
  
  width: 100%;

  .color-grey {
    color: #969ca5;
  }
`

const PasswordInput = styled(Input)`
  width: 100%;

  .MuiInputBase-input {
    color: #969ca5;
  }
`;

export default function MPassword({ password, handlePassword }) {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const changeVisibility = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  return (
    <MFormControl>
      <InputLabel htmlFor="password" className="color-grey">
        Password
      </InputLabel>
      <PasswordInput
        id="password"
        type={passwordIsVisible ? "text" : "password"}
        color="primary"
        value={password}
        onChange={handlePassword}
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
    </MFormControl>
  );
}
