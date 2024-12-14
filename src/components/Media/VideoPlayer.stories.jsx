import React from 'react';
import VideoPlayer from './VideoPlayer';

export default {
  title: 'Media/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A professional video player component with custom controls and features.',
      },
    },
  },
  argTypes: {
    autoPlay: {
      control: 'boolean',
      description: 'Auto-play the video',
    },
    controls: {
      control: 'boolean',
      description: 'Show video controls',
    },
    loop: {
      control: 'boolean',
      description: 'Loop the video',
    },
    muted: {
      control: 'boolean',
      description: 'Mute the video',
    },
  },
};

const sampleVideo = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4';
const samplePoster = 'https://test-videos.co.uk/user/pages/images/big_buck_bunny.jpg';

// Default video player
export const Default = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    className: 'w-[640px]',
  },
};

// Autoplay example
export const Autoplay = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    className: 'w-[640px]',
    autoPlay: true,
    muted: true, // Required for autoplay in most browsers
  },
};

// Without controls
export const WithoutControls = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    className: 'w-[640px]',
    controls: false,
  },
};

// Looping video
export const Looping = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    className: 'w-[640px]',
    loop: true,
  },
};

// Initially muted
export const InitiallyMuted = {
  args: {
    src: sampleVideo,
    poster: samplePoster,
    className: 'w-[640px]',
    muted: true,
  },
};

// Responsive sizes
export const ResponsiveSizes = () => (
  <div className="space-y-4">
    <VideoPlayer
      src={sampleVideo}
      poster={samplePoster}
      className="w-full max-w-sm"
    />
    <VideoPlayer
      src={sampleVideo}
      poster={samplePoster}
      className="w-full max-w-md"
    />
    <VideoPlayer
      src={sampleVideo}
      poster={samplePoster}
      className="w-full max-w-lg"
    />
  </div>
);

// Video playlist
export const Playlist = () => {
  const [currentVideo, setCurrentVideo] = React.useState(0);
  const videos = [
    { src: sampleVideo, poster: samplePoster, title: 'Video 1' },
    { src: sampleVideo, poster: samplePoster, title: 'Video 2' },
    { src: sampleVideo, poster: samplePoster, title: 'Video 3' },
  ];

  return (
    <div className="space-y-4">
      <VideoPlayer
        src={videos[currentVideo].src}
        poster={videos[currentVideo].poster}
        className="w-[640px]"
      />
      <div className="flex gap-2">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`px-4 py-2 rounded-lg ${
              currentVideo === index
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
}; 