import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {S} from './Slider_Styles'

export const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cum, debitis dolor
                            dolores earum eligendi explicabo facere incidunt, iste itaque laudantium maiores nostrum
                            perferendis quae reiciendis rem, saepe sunt tenetur.
                        </S.Text>
                    <S.Name>@ivan ivanov</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </S.Pagination>
        </S.Slider>
    );
};

