import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type Props = {
    id: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({id, width = '50', height = '50', viewBox = '0 0 50 50'}: Props) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${id}`}/>
        </svg>
    );
};
