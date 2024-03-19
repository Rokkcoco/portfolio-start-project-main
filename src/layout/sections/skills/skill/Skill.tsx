import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon id={'code'}/>
            <StyledSkillTitle>html5</StyledSkillTitle>
            <StyledSkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto, atque</StyledSkillText>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
    `

const StyledSkillTitle = styled.h3`
    
    `

const StyledSkillText = styled.p`
    
    `