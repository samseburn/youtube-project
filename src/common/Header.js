import React from "react";
import styled from "styled-components";

import Logo from "../assets/header/Logo.png";

const Header = () => {
    return (
        <Wrapper>
            <Set>
                <LogoBtn src={Logo}/>
            </Set>
            <Search>
                <Input type="text" placeholder="검색"/>
            </Search>
            <Set>

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
    padding: 0 20px;
    height: 70px;
    z-index: 1;
`;

const Set = styled.div`
    display: flex;
`;

const LogoBtn = styled.img`
    width: 10vw;
`;

const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    margin: 0 25px;
`;

const Input = styled.input`
    flex: 1;
    height: 30px;
    border: 1px solid gainsboro;
    outline: none;
    padding: 0 6px;

    ::placeholder {
        color: gray;
    }
`;

export default Header;

