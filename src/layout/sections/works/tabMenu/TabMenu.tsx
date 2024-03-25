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
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
`

