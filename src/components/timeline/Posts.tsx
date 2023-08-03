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

function Posts({ user, postImage, likes, timeStamp }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-user">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar> {user} •{" "}
          <span>{timeStamp}</span>
        </div>
        <MoreHorizOutlined />
      </div>

      <div className="post-image">
        <img src={postImage} alt="" />
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
        Liked by {likes} people
      </div>
    </div>
  );
}

export default Posts;
