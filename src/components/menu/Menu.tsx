import React from 'react';
import styled from "styled-components";


export const Menu = ({menuItems}: { menuItems: string[] }) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((t, i) => (
                    <li key={i}>
                        <a href="">{t}</a>
                    </li>)
                )}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`