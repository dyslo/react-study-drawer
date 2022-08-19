import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <Sidebar />
            <Styled.Wrapper>{ children }</Styled.Wrapper>
        </>
    );
};

const Styled = {
    Wrapper: styled.div`
        width: 100%
        height: 100%;
        padding-left: 60px;
    `
}

export default Layout;