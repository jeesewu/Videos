import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return null;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe src={videoSrc}></iframe>
      <div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
