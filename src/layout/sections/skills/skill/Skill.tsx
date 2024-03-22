import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type Props = {
    iconId: string
    title: string
    description: string
}

export const Skill = ({iconId, title, description}: Props) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon id={iconId}/>
                </IconWrapper>
                <StyledSkillTitle>{title}</StyledSkillTitle>
                <StyledSkillText>{description}</StyledSkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`

const StyledSkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const StyledSkillText = styled.p`
    text-align: center;
`
const IconWrapper = styled.div`
    position: relative;

    &::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`