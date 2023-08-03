import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Posts from "./Posts";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "y.ar.o",
      postImage:
        "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png",
      likes: 12,
      timeStamp: "2d",
    },
    {
      user: "blonded",
      postImage:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
      likes: 712,
      timeStamp: "1w",
    },
    {
      user: "feliciathegoat",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuiOZtk3k9U7Wl0a5xil8VikKj4jtlNvHGA&usqp=CAU",
      likes: 999,
      timeStamp: "1h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline-left">
        <div className="timeline-posts">
          {posts.map((post) => (
            <Posts
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timeStamp={post.timeStamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline-right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
