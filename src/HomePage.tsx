import React from "react";
import "./HomePage.css";
import Sidenav from "./components/navigation/Sidenav";
import Timeline from "./components/timeline/Timeline";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-nav">
        <Sidenav />
      </div>

      <div className="homepage-timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default HomePage;
