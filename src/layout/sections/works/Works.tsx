import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/proj1.webp'
import timerImg from '../../../assets/images/proj2.webp'
import {Container} from '../../../components/Container';

const worksItems = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {

    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}> {/*flex-start чтобы убрать растягивание обоих элементов*/}
                    <Work title={'Social Network'} text={'Lorem'} src={socialImg}/>
                    <Work title={'Timer'} text={'Lorem'} src={timerImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`