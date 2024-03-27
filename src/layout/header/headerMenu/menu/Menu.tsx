import React from 'react';
import {S} from '../HeaderMenu_Styles'

export const Menu:React.FC<{menuItems: string[]}> = ({menuItems}) => {
    return (
        <ul>
            {menuItems.map((item, i) => (
                <S.MenuItem key={i}>
                    <S.Link href="">
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.MenuItem>)
            )}
        </ul>
    );
};

