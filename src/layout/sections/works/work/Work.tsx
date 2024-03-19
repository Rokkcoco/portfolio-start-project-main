import React from 'react';
import styled from "styled-components";

type Props = {
    title: string
    text: string
    src: string
}

export const Work = ({title, text, src}: Props) => {
    return (
        <StyledWork>
            <Image src={src} alt=''/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href='#'>demo</Link>
            <Link href='#'>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: orange;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a`

`

const Title = styled.h3`

`

const Text = styled.p`

`