import React from 'react';
import {Paper,Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
const VideoDetail=({video})=>{
    if(!video)return <div><strong><CircularProgress color="primary" /> Loading ho rhi ha ,kuch type to krle.. <CircularProgress color="primary" /></strong></div>
    console.log(video.id.videoId);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <React.Fragment>
        <Paper elevation={6} style={{ height: "70%" }}>
          <iframe
            frameBorder="0"
            height="100%"
            width="150%"
            title="Video Player"
            src={videoSrc}
          />
        </Paper>
        <Paper elevation={3} style={{ padding: "30px" }}>
          <Typography variant="h4">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle2">{video.snippet.description}</Typography>
        </Paper>
      </React.Fragment>
    );
  }
  
export default VideoDetail;