import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleSearchSubmit = async (term) => {
    const API_KEY = "AIzaSyAs5Ze8wcmr807LNWPKsD5gyEn077YfkYs";
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: API_KEY,
          q: term,
        },
      }
    );

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
