import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string; // Path to the video file
  isPlaying: boolean; // To control playback
  onTimeUpdate: (currentTime: number) => void; // Callback for time updates
  loop?: boolean; // Option to loop the video
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, isPlaying, onTimeUpdate, loop = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        if (onTimeUpdate) {
          onTimeUpdate(video.currentTime);
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [onTimeUpdate]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop={loop}
      style={{ width: '400px', height: 'auto' }} // Increased width
    />
  );
};

export default VideoPlayer;
