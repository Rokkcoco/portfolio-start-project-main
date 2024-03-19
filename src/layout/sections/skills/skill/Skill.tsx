import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type Props = {
    iconId: string
    title: string
    description: string
}

export const Skill = ({iconId, title, description}: Props) => {
    return (
        <StyledSkill>
            <Icon id={iconId}/>
            <StyledSkillTitle>{title}</StyledSkillTitle>
            <StyledSkillText>{description}</StyledSkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
`

const StyledSkillTitle = styled.h3`

`

const StyledSkillText = styled.p`

`