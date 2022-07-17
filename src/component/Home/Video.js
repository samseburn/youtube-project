import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import youtubeData from "./youtubeData.json";

const Video = ({ index }) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBUeong2Kq7WfFHtpDjGwsqJSDhoXdgEK0`
                );
                setData(response.data);
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    });

    return (
        <VideoItem>
            <Thumbnail src={data.videoThumbnaill}/>
            <Profile src={youtubeData["data"][index + 28].channelThumbnail} />
            <Info>
                <Title>{data.videoTitle}</Title>
                <Channel>{data.videoChannel}</Channel>
                <Views>{data.videoCount}회</Views>
                <Date>{data.Date}</Date>
            </Info>
        </VideoItem>
    )
}

const VideoItem = styled.div`
    width: 300px;
    display: inline-block;
    padding: 8px;
    text-align: left;
    background-color: gray;
`;

const Thumbnail = styled.img`
    width: 100%;
    margin-bottom: 10px;
    background-color: gainsboro;
`;

const Profile = styled.img`
    border-radius: 50%;
    width: 2rem;
    float: left;
    margin: 0 1vw 10vh 0;
`;

const Info = styled.div`

`;

const Title = styled.div`
    overflow: hidden;
    white-space: normal;
    line-height: 1.2;
    text-align: left;
    word-wrap: break-word;
    background-color: blue;
`;

const Channel = styled.div`
    margin-top: 1vh;
    background-color: pink;
`;

const Views = styled.span`
    background-color: orange;
    font-size: 12px;
`;

const Date = styled.span`
    background-color: green;
    font-size: 12px;
`;

export default Video;