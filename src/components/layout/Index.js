import React from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

const Index = () => {
  return (
    <React.Fragment>
      {/* Import the search components */}
      <Search />
      {/* Display the track component */}
      <Tracks />
    </React.Fragment>
  );
};

export default Index;
