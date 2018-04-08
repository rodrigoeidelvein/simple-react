import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCWk-evPQkt0eiIqfR-4mmQmsbnaD7PLwk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "dota" }, videos => {
      this.setState({ videos })
    });
  }

  render() {
    console.log(this.state.videos)
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
