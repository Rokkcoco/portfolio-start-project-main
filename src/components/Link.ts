import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
    position: relative;
    z-index: 0;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    
    &:hover {
        &::before {
            height: 10px;
        } 
    }
    
    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        bottom: 5px;
        z-index: -1;
        left: 0;
        right: 0;
        background-color: ${theme.colors.accent};
    }
`