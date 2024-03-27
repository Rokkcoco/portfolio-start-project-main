import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu:React.FC<{ menuItems: string[] }> = ({menuItems}) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems}/>
        </S.DesktopMenu>
    );
};




