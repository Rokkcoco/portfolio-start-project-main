import React from 'react';
import styled from "styled-components";

type Props = {
    title: string
    text: string
    src: string
}

export const Work = ({title, text, src}:Props) => {
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
    `

const Image = styled.img`
    
    `

const Link = styled.a`
    
    `

const Title = styled.h3`
    
    `

const Text = styled.p`
    
    `