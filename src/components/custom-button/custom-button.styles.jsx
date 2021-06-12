import { PROPERTY_TYPES } from "@babel/types";
import styled, { css }  from "styled-components";

// regular button style
const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: ease-in-out 200ms;
    }
`;

// inverted button style
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

// google button style
const googleSignInStyles = css`
    background-color: #4285F4;
    color: white;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
      transition: ease-in-out 200ms;
    }
`;

// determine button style from props
const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

// button container
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;