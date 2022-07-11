import axios from 'axios';
const KEY = "AIzaSyBUeong2Kq7WfFHtpDjGwsqJSDhoXdgEK0"; // youtube api key

const youtube = axios.create({
    baseURL:  "https://www.googleapis.com/youtube/v3",
    params: { 
        part: "snippet",
        maxResults: 5, // 
        key: KEY // youtub api key
        
    },
});


export default youtube

// api 호출 시 주의 사항 
// youtub 검색 api 이용 시 한글로 검색이 안 될 떄
// var value=encodeURL(코코몽);

