import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
        min-height: 100vh;
        background-color: pink;
        display: flex;
    `

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    ${font({weight: 400, fMax: 27, fMin: 20})}
`

const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, fMax: 50, fMin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        &::before {
            z-index: -1;
            position: absolute;
            content: '';
            display: inline-block;
            bottom: 0;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
        }
    }
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        z-index: -1;
        content: '';
        position: absolute;
        top: -24px;
        left: 24px;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
    
    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`

export const S = {
    Main,
    Photo,
    MainTitle,
    Name,
    SmallText,
    PhotoWrapper
}