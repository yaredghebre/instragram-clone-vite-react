import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import {
  BookmarkBorderOutlined,
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  MoreHorizOutlined,
  Telegram,
} from "@mui/icons-material";

function Posts() {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-user">
          <Avatar>Y</Avatar>
          y.ar.o • <span>12h</span>
        </div>
        <MoreHorizOutlined />
      </div>

      <div className="post-image">
        <img
          src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"
          alt=""
        />
      </div>

      <div className="post-footer">
        <div className="post-footer-icons">
          <div className="post-footer-icons-left">
            <FavoriteBorderOutlined className="post-icon" />
            <ChatBubbleOutline className="post-icon" />
            <Telegram className="post-icon" />
          </div>
          <div className="post-footer-icons-right">
            <BookmarkBorderOutlined className="post-icon" />
          </div>
        </div>
        Liked by 182 people
      </div>
    </div>
  );
}

export default Posts;
