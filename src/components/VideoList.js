import React from "react";

import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const videos = this.props.videos
      ? this.props.videos.map((video) => {
          return (
            <VideoItem
              key={video.id}
              imageURL={video.imageURL}
              imageAlt={video.imageAlt}
              title={video.title}
              description={video.description}
            />
          );
        })
      : null;
    return <div>{videos}</div>;
  }
}

export default VideoList;
