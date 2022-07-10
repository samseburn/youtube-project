import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FiMenu } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { VscHome } from "react-icons/vsc";

const Nav = () => { 
    // Logo click reload
    // drop

    return (
        <Container>
            <Link to="/" className="link"> 
                    <MainMenuDiv>
                        <Icon><TiHome className="icon" /></Icon>
                        <MenuSpan>홈</MenuSpan>
                    </MainMenuDiv>
                    <MainMenuDiv>
                        <Icon><TiHome className="icon" /></Icon>
                        <MenuSpan>탐색</MenuSpan>
                    </MainMenuDiv>
                    <MainMenuDiv>
                        <Icon><TiHome className="icon" /></Icon>
                        <MenuSpan>구독</MenuSpan>
                    </MainMenuDiv>
                    <MainMenuDiv>
                        <Icon><TiHome className="icon" /></Icon>
                        <MenuSpan>보관함</MenuSpan>
                    </MainMenuDiv>
                    <MainMenuDiv>
                        <Icon><TiHome className="icon" /></Icon>
                        <MenuSpan>시청 기록</MenuSpan>
                    </MainMenuDiv>
            </Link>
        </Container>
    )

}

const Container = styled.div`
    width: 75px;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    flex-shrink: 0;
    padding-top: 1rem;

    .link {
        text-decoration: none;
    }

    .open {

    }

    .icon {
        width: 24px;
        height: 24px;
    }
    
`

const MainMenuDiv = styled.div`
    padding: 6px 0;
    margin-bottom: 24px;
    text-align: center;
`

const Icon = styled.div`
    color: black;
    margin-bottom: 5px;
`


const MenuSpan = styled.div`
    text-align: center;
    font-size: 10px;
    color: black;
`



export default Nav;