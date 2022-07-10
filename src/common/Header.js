import React from "react";
import styled from "styled-components";

import { FiMenu } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { IoAlertCircleOutline, IoAppsSharp, IoNotificationsOutline, IoPersonCircle } from "react-icons/io5";
import Logo from "../assets/header/Logo.png";

const Header = () => {
    return (
        <Wrapper>
            <Set>
                <FiMenu className="icon" 
                    // onClick sidebar toggle
                />
                <LogoBtn src={Logo}/>
            </Set>
            <Search>
                <Input type="text" placeholder="검색"/>
                <HiOutlineSearch className="search-button" />
                <Button />
                <Button />
            </Search>
            <Set>
                <IoAlertCircleOutline className="icon" />
                <IoAppsSharp className="icon" />
                <IoNotificationsOutline className="icon" />
                <IoPersonCircle className="icon" />
            </Set>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 4px;
    height: 70px;
    z-index: 1;

    .icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

`;

const Set = styled.div`
    display: flex;
    gap: 25px;
`;


const LogoBtn = styled.img`
    width: 100px;
    height: auto;
`;

const Button = styled.img`
`;

const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    margin: 0 25px;

    .search-button {
        width: 24px;
        height: 24px;
        padding: 6px 20px;
        border: 1px solid #d3d3d3;
        background-color: #f9f9f9;
        cursor: pointer;

    }
`;

const Input = styled.input`
    flex: 1;
    height: 36px;
    border: 1px solid gainsboro;
    border-right: none;
    outline: none;
    padding: 0 6px;

    ::placeholder {
        color: gray;
    }
`;

export default Header;

