import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


export const TabMenu = ({menuItems}: { menuItems: string[] }) => {
    return (
        <StyledTabMenu>
            <ul>
                {menuItems.map((t, i) => (
                    <ListItem key={i}>
                        <Link href="">{t}</Link>
                    </ListItem>)
                )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`

const ListItem = styled.li`
`

