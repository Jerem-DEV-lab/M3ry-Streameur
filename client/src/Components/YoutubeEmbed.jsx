import React from 'react';
import YouTube from "react-youtube";

const YoutubeEmbed = ({videoId, key}) => {
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };
    return <>
        <div className="player" key={key}>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
        </div>
    </>
};

export default YoutubeEmbed;
