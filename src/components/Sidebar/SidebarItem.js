import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
    const { icon, type, title, page, active } = props;
    switch(type) {
        case "item":
            return (
                <Link to={page}>
                    <Styled.Wrapper active={active}>
                        <Styled.Selected active={active}></Styled.Selected>
                        <Styled.Icon>{icon}</Styled.Icon>
                        <Styled.Title>{title}</Styled.Title>
                    </Styled.Wrapper>
                </Link>
            );
        case "link":
            return (
                <Link to={page}>
                    <Styled.Wrapper>
                        <Styled.Selected></Styled.Selected>
                        <Styled.Icon>{icon}</Styled.Icon>
                        <Styled.Title>{title}</Styled.Title>
                    </Styled.Wrapper>
                </Link>
            )
    }
};

const Styled = {
    Wrapper: styled.li`
        width: 200px;
        height: 50px;
        margin: 10px 0;
        display: flex;
    `,

    Selected: styled.div`
        position: absolute;
        z-index: -1;
        width: 0;
        height: 50px;
        background-color: skyblue;
        transition: .3s all ease;
        ${(props) => props.active && `
            width: 100%;
        `}
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
        font-weight: 400;
    `
};

export default SidebarItem;