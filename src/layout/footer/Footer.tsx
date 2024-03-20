import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Devil within</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} id={'code'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} id={'code'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} id={'code'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} id={'code'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>@2024 no rights for this kekw</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
background-color: aqua;
min-height: 20vh;
`

const Name = styled.span`


`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`

const SocialItem = styled.li`


`

const SocialLink = styled.a`


`

const Copyright = styled.small`


`