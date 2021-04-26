import React from "react";

class VideoItem extends React.Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <div onClick={() => onVideoSelect(video)}>
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
        <div>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoItem;
