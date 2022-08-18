import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './Sidebar/SidebarItem';
import { 
    ChevronLeft20Filled,
    Home24Filled,
    Search24Filled,
    Map24Filled,
    Call24Filled
} from '@fluentui/react-icons'


const Sidebar = () => {
    const [isExpanded, setisExpanded] = useState(true);

    //console.log(location.pathname);

    const handleExpand = () => {
        setisExpanded(!isExpanded);
    };

    const SidebarItems = {
        Home: {
            "icon": <Home24Filled/>,
            "title": "Home",
            "page": "/"
        },

        FindPlaces: {
            "icon": <Search24Filled/>,
            "title": "Find Places",
            "page": "/test"
        },

        ViewMap: {
            "icon": <Map24Filled/>,
            "title": "View Map",
            "page": "/test2"
        },

        ContactUs: {
            "icon": <Call24Filled/>,
            "title": "Contact Us",
            "page": "/test3"
        }
    }

    return (
        <>
            <Styled.Wrapper active={isExpanded}>
                <Styled.ExpandButton active={isExpanded} onClick={handleExpand}><ChevronLeft20Filled/></Styled.ExpandButton>
                <Styled.List>
                    {Object.entries(SidebarItems).map(([key, value]) => {
                        return <SidebarItem 
                        key={key} 
                        icon={value.icon} 
                        title={value.title} 
                        page={value.page} />
                    })}

                    {/* <SidebarItem icon={<Home24Filled/>} title="Home" page="/"/>
                    <SidebarItem icon={<Search24Filled/>} title="Find Places" page="/test"/>
                    <SidebarItem icon={<Map24Filled/>} title="View Map" page=""/>
                    <SidebarItem icon={<Call24Filled/>} title="Contact Us" page=""/> */}
                </Styled.List>
            </Styled.Wrapper>
            <Outlet />
        </>
    );
};

const Styled = {
    Wrapper: styled.div`
        position: fixed;
        left: 0;
        height: 100%;
        width: 200px;
        background-color: #f0f0f0;
        transition: .3s width ease;
        overflow: hidden;
        box-shadow: 5px 0 5px -5px rgba(0,0,0,0.2), 8px 0 10px 0px rgba(0,0,0,0.1);
        ${(props) => props.active &&`
            width: 50px;
        `}
    `,

    ExpandButton: styled.button`
        width: 50px;
        height: 30px;
        float: right;
        margin: 5px 0;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0;
        transition: .3s transform ease;
        ${(props) => props.active && `
            transform: rotate(-180deg);
        `}
    `,

    List: styled.div`
        width: 200px;
        padding-top: 30px;
        min-height: 50px;
        float: left;
    `,
};

export default Sidebar;