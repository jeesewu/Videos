import React from "react";
import youtube from "../apis/youtube";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term, part: "snippet", maxResults: 5 },
    });

    this.setState({ videos: response.data.items });
  };

  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.handleSearchSubmit} />
        <div>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.handleVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
