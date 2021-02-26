import React from 'react';
import TwitchFluxVideo from "../Twitch/TwitchFluxVideo";
import {FaEye} from "react-icons/fa";
import TwitchChat from "../Twitch/TwitchChat";

const LiveOn = ({infoStream, chatTheme}) => {
    return <>
        <div id="twitch-embed">
            <div className="twitch-embedded_video">
                <TwitchFluxVideo/>
                {infoStream && <div className="twitch-embedded-footer">
                    <h2 className="stream-title"
                        title={infoStream.titleStream}>{infoStream.titleStream}</h2>
                    <div className="viewerCount"><FaEye color="red"/>&nbsp;{infoStream.viewers}</div>
                </div>}
            </div>
            <TwitchChat theme={chatTheme}/>
        </div>
    </>
};

export default LiveOn;
