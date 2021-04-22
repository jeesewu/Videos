import React from "react";

class VideoItem extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imageURL} alt={this.props.imageAlt} />
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoItem;
