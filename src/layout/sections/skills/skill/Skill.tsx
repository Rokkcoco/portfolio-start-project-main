import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Skills_Styles'

type Props = {
    iconId: string
    title: string
    description: string
}

export const Skill = ({iconId, title, description}: Props) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon id={iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

