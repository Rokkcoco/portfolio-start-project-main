import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
        <SectionTitle>Testimony</SectionTitle>
            <Icon id={'quote'}/>
            <Slider/>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
min-height: 100vh;
background-color: bisque;
`