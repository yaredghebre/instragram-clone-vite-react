import React from "react";
import "./HomePage.css";
import Sidenav from "./components/navigation/Sidenav";
import Timeline from "./components/timeline/Timeline";
import Stories from "./components/timeline/Stories";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-nav">
        <Sidenav />
      </div>

      <div className="homepage-timeline">
        <Stories />
        <Timeline />
      </div>
    </div>
  );
}

export default HomePage;
