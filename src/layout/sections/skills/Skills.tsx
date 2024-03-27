import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'

const skillData = [
    {
        iconId: 'code',
        title: 'html5',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptatem."
    }, {
        iconId: 'code',
        title: 'html5',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptatem."
    }, {
        iconId: 'code',
        title: 'html5',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptatem."
    }, {
        iconId: 'code',
        title: 'html5',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptatem."
    }, {
        iconId: 'code',
        title: 'html5',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptatem."
    }, {
        iconId: 'code',
        title: 'html5',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptatem."
    }
]

export const Skills:React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map(t => (
                        <Skill key={t.title} iconId={t.iconId} title={t.title} description={t.description}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

