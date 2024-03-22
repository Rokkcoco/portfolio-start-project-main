import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type Props = {
    title: string
    text: string
    src: string
}

export const Work = ({title, text, src}: Props) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={src} alt=''/>
                <Button>VIEW PROJECT</Button>
            </ImageWrapper>
            <Description>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Link href='#'>demo</Link>
                <Link href='#'>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            position: absolute;
            content: '';
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }
        
        ${Button} {
            opacity: 1;
        }
    }
    
    ${Button} {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }
`

const Title = styled.h3`

`

const Text = styled.p`
    margin: 14px 0 10px;
`

const Description = styled.div`
    padding: 25px 20px;
`