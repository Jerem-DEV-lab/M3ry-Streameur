import React, {useEffect, useState} from 'react';

const TwitchChat = ({theme}) => {
    const [chat, setTchat] = useState("")
    useEffect(() => {
        if (theme.isDark) {
            setTchat("https://www.twitch.tv/embed/the_m3ry/chat?parent=localhost&darkpopout")
        } else {
            setTchat("https://www.twitch.tv/embed/the_m3ry/chat?parent=localhost")
        }
    }, [theme.isDark])
    return <>
        {!theme.loading && <iframe src={chat} id="frame-tchat"/>}

    </>
};

export default TwitchChat;
