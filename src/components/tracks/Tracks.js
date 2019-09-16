import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "../tracks/Track";

class Tracks extends Component {
  render() {
    return (
      /* The consumer is exported from the context api, so that it can be used to get the state */
      <Consumer>
        {value => {
          /* Destructuring the value, so that it doesn't need the value prefix */
          const { track_list, heading } = value;
          /* if the track list is empty, or undefined, show a spinner, to give a visual feedback, of the tracks loading */
          if (track_list === undefined || track_list.length === 0) {
            /* return the spinner */
            return <Spinner />;
          } else {
            /* if the track list has items, display them */
            return (
              <React.Fragment>
                <h3 className="text-center title-heading mb-4">{heading}</h3>
                <div className="row">
                  {/* map through the list, so that all the tracks can be displayed */}
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
