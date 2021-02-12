import React, {useState} from 'react';
import YouTube from "react-youtube";

const YoutubeEmbed = ({videoId, key= ""}) => {
    const [playerOn, setPlayerOn] = useState(false)
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
        <div className={`player ${playerOn ? "read-on" : ""}`} key={key} onClick={() => setPlayerOn(!playerOn)}>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady}/>
        </div>
    </>
};

export default YoutubeEmbed;
