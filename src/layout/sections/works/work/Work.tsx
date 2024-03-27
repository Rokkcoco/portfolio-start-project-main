import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles'

type Props = {
    title: string
    text: string
    src: string
}

export const Work:React.FC<Props> = ({title, text, src}) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={src} alt=''/>
                <Button>VIEW PROJECT</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link href='#'>demo</Link>
                <Link href='#'>code</Link>
            </S.Description>
        </S.Work>
    );
};

