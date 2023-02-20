import React from 'react';
import logo from '../logo.png';

const VideoCard = () => {
  return (
    <div className='border w-64 h-64'>
        <img src={logo} />
        <div>TITLE</div>
        <div>DESCRIPTION</div>
        <div>
            views and years ago
        </div>
    </div>
  )
}

export default VideoCard;