
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className="overflow-hidden">
    <iframe
      width="288"
      height="162"
      src={`https://www.youtube.com/embed/Kyqo8qYKNIc`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);


export default YoutubeEmbed;
