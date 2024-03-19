import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";


const worksItems = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {

    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper>
                <Work title={'Social Network'} text={'Lorem'} src={}/>
                <Work title={'Timer'} text={'Lorem'} src={}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: peru;
`