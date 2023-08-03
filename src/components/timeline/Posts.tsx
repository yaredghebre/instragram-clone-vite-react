import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";

function Posts() {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-user">
          <Avatar>Y</Avatar>
          y.ar.o • <span>12h</span>
        </div>
      </div>
      <div className="post-image"></div>
      <div className="post-footer"></div>
    </div>
  );
}

export default Posts;
