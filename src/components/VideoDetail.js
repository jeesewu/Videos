import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;
    if (!video) {
      return <div>Loading...</div>;
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
  }
}

export default VideoDetail;
