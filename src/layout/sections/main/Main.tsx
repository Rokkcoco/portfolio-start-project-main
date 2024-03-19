import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
export const Main = () => {
    return (
        <div>
            <div>
                <span>Hi There</span>
                <h2>I am Devil within</h2>
                <h1>A Web Developer.</h1>
            </div>
            <StyledImage src={photo} alt=''/>
        </div>
    );
};

const StyledImage = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`