import React, { useState } from 'react';

const VideoUploader = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);

    // You can also perform additional tasks with the selected file if needed
    // For example, you can upload the file to a server using a library like axios.
  };
  console.log(selectedVideo)

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      
      {selectedVideo && (
        <div>
          
          <video width="400" controls>
            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4"  />
            
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
