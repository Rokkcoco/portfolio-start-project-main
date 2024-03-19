import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/proj1.webp'
import timerImg from '../../../assets/images/proj2.webp'

const worksItems = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {

    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'} text={'Lorem'} src={socialImg}/>
                <Work title={'Timer'} text={'Lorem'} src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: peru;
`