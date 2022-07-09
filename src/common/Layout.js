import Header from "./Header";
import Nav from "./Nav";
import styled from "styled-components";

const Layout = ({active, content}) => {
    return (
        <Wrapper>
            <Header />
            <Body>
                <Nav active={active}></Nav>
                <div className="contents">{content}</div>
            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .contents {
        background-color: black;
        margin-left: 240px;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 100px;
    }
`;

const Body = styled.div`
    margin-top: 76px;
`;


export default Layout