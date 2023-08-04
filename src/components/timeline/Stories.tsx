import React from "react";
import "./Stories.css";
import { Avatar } from "@mui/material";

function Stories() {
  return (
    <div className="section-wrapper">
      <div className="stories-container">
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
        <div className="user-story">
          <Avatar>Y</Avatar>
        </div>
      </div>

      <div className="user-logged">
        <div className="user-info">
          <Avatar>Y</Avatar>
          <span className="user-name">y.ar.o</span>
          <span className="user-relation">New to Instagram</span>
        </div>

        <div className="user-action">Log out</div>
      </div>
    </div>
  );
}

export default Stories;
