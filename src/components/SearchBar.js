import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  state = { term: "" };

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSearchSubmit = async (event) => {
    event.preventDefault();
    const API_KEY = "AIzaSyAs5Ze8wcmr807LNWPKsD5gyEn077YfkYs";
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: API_KEY,
          q: this.state.term,
        },
      }
    );
    console.log(response);
  };

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search Videos..."
          value={this.state.term}
          onChange={this.handleTermChange}
        />
      </form>
    );
  }
}

export default SearchBar;
