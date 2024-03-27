import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

const socialItemsData = [
    {iconId: 'instagram'},
    {iconId: 'instagram'},
    {iconId: 'instagram'},
    {iconId: 'instagram'},
]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Devil within</S.Name>
                <S.SocialList>
                    {socialItemsData.map(t => (
                        <S.SocialItem key={t.iconId}>
                            <S.SocialLink>
                                <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} id={t.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    ))}
                </S.SocialList>
                <S.Copyright>@2024 no rights for this kekw</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

