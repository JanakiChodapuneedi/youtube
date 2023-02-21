import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos,setVideos] = useState(null);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json =  await data.json();
    setVideos(json?.items);
  }

  useEffect(()=>{
    getVideos();
  },[])
  if (!videos) return null;
  return (
    <div className='flex'>
      {videos.map(video=>
          <VideoCard key={video.id} info={video} />
      )}
      
    </div>
  )
}

export default VideoContainer;