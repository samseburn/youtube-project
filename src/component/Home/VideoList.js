import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


import Video from "./Video";

const VideoList = () => {
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos`
                );
                setVideos(response.data);
                console.log(videos);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    });

    return (
        <Wrapper>
            {videos.map((i) => (
                <Video index={i.videoIdx} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default VideoList;