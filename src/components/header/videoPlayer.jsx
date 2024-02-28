import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls={true} // Enable video controls (play, pause, volume, etc.)
        width="1000px"
        height="auto"
      />
    </div>
  );
};

export default VideoPlayer;