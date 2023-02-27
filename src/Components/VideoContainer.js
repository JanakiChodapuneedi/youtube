import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API_LIST_CONST } from '../constants';
const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
 // const [videos,setVideos] = useState(YOUTUBE_VIDEOS_API_LIST_CONST);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json =  await data.json();
    setVideos(json?.items);
    
    console.log(json?.items);
    setVideos(json?.items);
    
    // const json = {YOUTUBE_VIDEOS_API_LIST_CONST};
  }

  useEffect(()=>{
    getVideos();
  },[])
  if (!videos) return null;
  return (
    <div className='flex flex-wrap'>
      {videos.map(video=>
         <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard  info={video} /></Link>
      )}
      
    </div>
  )
}

export default VideoContainer;