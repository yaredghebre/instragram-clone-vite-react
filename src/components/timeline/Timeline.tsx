import React from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Posts from "./Posts";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-left">
        <div className="timeline-posts">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
      <div className="timeline-right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
