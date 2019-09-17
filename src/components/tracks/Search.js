import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=6&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });

        /* clears the search input after the search */
        this.setState({ trackTitle: "" });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p">
              <h1 className="text-center">Search a song</h1>
              <p className="text-center">Type the title, then click search</p>
              <form
                className="form-search-song"
                onSubmit={this.findTrack.bind(this, dispatch)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg input-search-song"
                    placeholder="Title of the song..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-dark btn-block mb-1" type="submit">
                  SEARCH
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
