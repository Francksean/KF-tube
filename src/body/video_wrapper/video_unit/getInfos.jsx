
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YoutubeInfos(videoId){
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [title, setTitle] = useState('');
  const [channelTitle, setChannelTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyCj4JFAfx8_F_tYQHPA94D9FGDu34alghc&part=snippet`);
      setThumbnailUrl(response.data.items[0].snippet.thumbnails.medium.url);
      setTitle(response.data.items[0].snippet.title)
      setChannelTitle(response.data.items[0].snippet.channelTitle)
    };
    fetchData();
  }, [videoId]);

  return {thumbnailUrl,title, channelTitle};
};

export default YoutubeInfos;

