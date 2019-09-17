import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  /* destructure the props, to get the track */
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card card-tracks mb-4">
        <div className="card-body">
          {/* display the name of the artist */}
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              {/* display the track name */}
              <i className="fas fa-music"></i> Track{" "}
            </strong>
            : {track.track_name}
            <br />
            <strong>
              {/* Display the album name */}
              <i className="fas fa-compact-disc"></i> Album{" "}
            </strong>
            : {track.album_name}
          </p>
          <Link
            /* Link to a page, where the lyrics can be viewed */
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block draw-border"
          >
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
