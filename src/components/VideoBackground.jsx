import React from "react";
import { useSelector } from "react-redux";
import useMovieTeaser from "../hooks/useMovieTeaser";

const VideoBackground = ({ movieId }) => {
  const teaserVideo = useSelector((store) => store.movies?.teaserVideo);
  useMovieTeaser(movieId);

  return (
    <div className="w-screen h-screen">
      {teaserVideo ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${teaserVideo.key}?autoplay=1&mute=1&modestbranding=1&rel=0`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading teaser video...</p>
      )}
    </div>
  );
};

export default VideoBackground;
