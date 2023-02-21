import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-md">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div className="font-bold">{channelTitle}</div>
      <div>{title}</div>
      <div>{statistics.viewCount} views </div>
      <div>{statistics.likeCount} Likes</div>
    </div>
  );
};

export default VideoCard;
