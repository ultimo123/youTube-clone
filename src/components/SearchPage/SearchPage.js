import React from "react";
import "./SearchPage.css";
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../ChannelRow/VideoRow/VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutLinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.pinimg.com/originals/da/36/ce/da36cef1a890d864067514229acf9398.png"
        channel="Functional Training"
        verified
        subs="659K"
        noOfVideos={382}
        description="IN THIS CHANNEL YOU WILL FIND WORKOUTS FOR CHEST, BACK, SHOULDER, LEGS, ABS, ARMS AND CARDIO. 
        I WILL SHOW YOU ALL MY ROUTINES THAT HELPED ME IN THIS FOUR YEARS OF HARD TRAINING. I WILL HELP YOU TO  ....
        "
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a free course forever"
        timestamp="59 seconds ago"
        channel="Clever programer"
        image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
        title="🔴 Lets build a You tube clone "
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a free course forever"
        timestamp="59 seconds ago"
        channel="Clever programer"
        image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
        title="🔴 Lets build a You tube clone "
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a free course forever"
        timestamp="59 seconds ago"
        channel="Clever programer"
        image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
        title="🔴 Lets build a You tube clone "
      />
    </div>
  );
}

export default SearchPage;
