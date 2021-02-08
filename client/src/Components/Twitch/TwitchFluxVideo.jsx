import React from 'react';

const TwitchFluxVideo = () => {
    return <>
        <iframe src="https://player.twitch.tv/?channel=the_m3ry&parent=localhost" id="frame-video"
                frameBorder="0"
                allowFullScreen="true" scrolling="no"
        />
    </>
};

export default TwitchFluxVideo;
