import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
    const { icon, title, page } = props;
    return (
        <Link to={page}>
            <Styled.Wrapper>
                <Styled.Icon>{icon}</Styled.Icon>
                <Styled.Title>{title}</Styled.Title>
            </Styled.Wrapper>
        </Link>
    );
};

const Styled = {
    Wrapper: styled.div`
        width: 200px;
        height: 50px;
        margin: 10px 0;
        display: flex;
    `,

    Icon: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        width: 50px;
        height: 50px;
    `,

    Title: styled.div`
        float: right;
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-align: left;
        font-size: 20px;
        font-weight: 300;
    `
};

export default SidebarItem;