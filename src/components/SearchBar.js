import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Search Videos..."
            value={this.state.term}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
