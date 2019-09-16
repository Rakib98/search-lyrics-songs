import React from "react";
import spinner from "./Pacman.svg";

export default () => {
  return (
    /* Create a spinner component. That has a gif, that will be displayed when the tracks are being fetched */
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: " 40px auto", display: "block" }}
      />
    </div>
  );
};
