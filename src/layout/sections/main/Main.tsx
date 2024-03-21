import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Devil within</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                        <span></span>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
        min-height: 100vh;
        background-color: pink;
        display: flex;
    `

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;
        
    span {
        position: relative;
        z-index: 0;
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
    }
`