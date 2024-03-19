import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <StyledName>I am Devil within</StyledName>
                    <StyledMainTitle>A Web Developer.</StyledMainTitle>
                    <span></span>
                </div>
                <StyledPhoto src={photo} alt=''/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: pink;
`

const StyledPhoto = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMainTitle = styled.h1`
    
    `

const StyledName = styled.h2`
    
    `