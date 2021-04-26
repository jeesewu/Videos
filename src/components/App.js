import React from "react";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: {} };

  render() {
    return (
      <div>
        <SearchBar />
        <div>
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
