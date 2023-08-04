import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className="suggestions-container">
      <div className="sugg-title">Suggestions for you</div>

      {/* Row */}
      <div className="sugg-username-container">
        <div className="sugg-username">
          <div className="user-left">
            <span className="user-avatar">
              <Avatar>Y</Avatar>
            </span>

            <div className="user-info">
              <span className="user-name">y.ar.o</span>
              <span className="user-relation">New to Instagram</span>
            </div>
          </div>

          <div className="user-right">
            <button className="action">Follow</button>
          </div>
        </div>
      </div>
      {/* End Row */}

      {/* Row */}
      <div className="sugg-username-container">
        <div className="sugg-username">
          <div className="user-left">
            <span className="user-avatar">
              <Avatar>Y</Avatar>
            </span>
            <div className="user-info">
              <span className="user-name">y.ar.o</span>
              <span className="user-relation">New to Instagram</span>
            </div>
          </div>

          <div className="user-right">
            <button className="action">Follow</button>
          </div>
        </div>
      </div>
      {/* End Row */}

      {/* Row */}
      <div className="sugg-username-container">
        <div className="sugg-username">
          <div className="user-left">
            <span className="user-avatar">
              <Avatar>Y</Avatar>
            </span>
            <div className="user-info">
              <span className="user-name">y.ar.o</span>
              <span className="user-relation">New to Instagram</span>
            </div>
          </div>

          <div className="user-right">
            <button className="action">Follow</button>
          </div>
        </div>
      </div>
      {/* End Row */}
    </div>
  );
}

export default Suggestions;
