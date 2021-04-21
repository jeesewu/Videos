import React from "react";

import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const videos = ["video1", "video2"].map((video) => {
      return <VideoItem />;
    });
    return <div>{videos}</div>;
  }
}

export default VideoList;
