import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", fMax: 36, fMin: 30, weight: 600})}
    text-align: center;
    letter-spacing: 5px;
    position: relative;
    margin-bottom: 90px;
    
    &::before {
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        color: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`