import axios from 'axios';
const KEY = "AIzaSyBUeong2Kq7WfFHtpDjGwsqJSDhoXdgEK0"; // youtube api key

const youtube = axios.create({
    baseURL:  "https://www.googleapis.com/youtube/v3",
    params: { 
        key: KEY, // youtub api key
        part: "snippet", // 관련된 영상들
        q: {}, // 검색어
        maxResults: 5, // 영상 불러오는 최대 개수
        type: "video",
        videoDuation: "long" // 영상 길이 
    },
});


export { youtube };

// api 호출 시 주의 사항 
// youtub 검색 api 이용 시 한글로 검색이 안 될 떄
// var value=encodeURL(코코몽);

