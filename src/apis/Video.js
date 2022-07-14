import youtube from "./Youtube";

const getVideoSearch = async (params) => {
  const { data } = await youtube.get("/search", {
    params: {
      part: "snippet",
      maxResults: 20, 
      q: params.q,
      type: "video",
    },
  });
  return data;
};

export { getVideoSearch }
