import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
background-color: ${theme.colors.primaryBg};
padding: 40px 0;
`

const Name = styled.span`
    ${font({family: "'Josefin Sans',sans-serif", fMax: 22, weight: 700, fMin: 16})}
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0 ;
`

const SocialItem = styled.li`
    

`

const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255,255,255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        background-color: ${theme.colors.accent};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    opacity: 0.5;
`
export const S = {
    Name,
    SocialItem,
    SocialLink,
    SocialList,
    Copyright,
    Footer
}