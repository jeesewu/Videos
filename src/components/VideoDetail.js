import React from "react";

class VideoDetail extends React.Component {
  render() {
    return (
      <div>
        <iframe src={this.props.url}></iframe>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
