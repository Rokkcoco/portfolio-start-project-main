import React from 'react';
import styled from "styled-components";
import { theme } from '../../styles/Theme';
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum, debitis dolor
                            dolores earum eligendi explicabo facere incidunt, iste itaque laudantium maiores nostrum
                            perferendis quae reiciendis rem, saepe sunt tenetur.
                        </Text>
                    <Name>@ivan ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`

    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`
    font-family: 'Josefin Sans',sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block; /*меняем дисплей чтобы можно было задать нужные маржины, тк изначально элемент строчный и верхний нижний маржин не работает*/
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: rgba(255,255,255,0.5);
        border-radius: 20px;
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            width: 20px;
            background-color: ${theme.colors.accent};
        }
    }
`