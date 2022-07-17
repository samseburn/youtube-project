import React from "react";
import styled from "styled-components";
import VideoList from "../component/Home/VideoList";

// import VideoList from "../component/Home/VideoList";


const  Home = () => {
    return (
        <Wrapper>
           <VideoList />
        </Wrapper>
    )
}

const Wrapper = styled.div`
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

export default Home;