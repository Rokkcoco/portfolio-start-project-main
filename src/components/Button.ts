import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    z-index: 0;
    &:hover {
        &::before {
            width: 100%;
            height: 100%;
        }
    }
    
    &::before {
        z-index: -1;
        content: '';
        display: inline-block;
        position: absolute;
        height: 10px;
        width: 50%;
        background-color: ${theme.colors.accent};
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    
    
`