import React, {useState,useEffect, useContext} from 'react';
import ModalEnter from "../../Components/ModalEnter";
import {ThemeContext} from "../../context/ThemeContext";
import TwitchChat from "../../Components/Twitch/TwitchChat";
import TwitchFluxVideo from "../../Components/Twitch/TwitchFluxVideo";
import Loader from "../../Components/ui/Loader";
import {FaEye} from "react-icons/fa";
import {isEmpty} from "../../utils";
import Youtube from "../../Components/YoutubeEmbed";
import {YoutubeContext} from "../../context/YoutubeContext";
import {TwitchContext} from "../../context/TwitchContext";

const Home = () => {
    const [openSite, setOpenSite] = useState(false)
    const infoStream = useContext(TwitchContext)
    const theme = useContext(ThemeContext)
    const youtubeInfo = useContext(YoutubeContext)
    const [latestVideo, setLatestVideo] = useState([])
    useEffect(() => {
        if(!isEmpty(youtubeInfo.videos))
        {
            setLatestVideo([youtubeInfo.videos[0], youtubeInfo.videos[1]])
        }
    }, [youtubeInfo])
    return <>
        {/**<ModalEnter openSites={() => setOpenSite(!openSite)} status={openSite}/>**/}
        <main className="mb-5">
            <div className={`container overflow-hidden ${!infoStream.isOnLive ? "pt-8" : ""}`}>
                {infoStream.loading ? <div className="c-loader"><Loader/></div> : <>
                    {infoStream.isOnLive ? <>
                        <div id="twitch-embed">
                            <div className="twitch-embedded_video">
                                <TwitchFluxVideo/>
                                {infoStream && <div className="twitch-embedded-footer">
                                    <h2 className="stream-title"
                                        title={infoStream.titleStream}>{infoStream.titleStream}</h2>
                                    <div className="viewerCount"><FaEye color="red"/>&nbsp;{infoStream.viewers}</div>
                                </div>}
                            </div>
                            <TwitchChat theme={theme}/>
                        </div>
                    </> : <div className="no-live">
                        <h1 className="h1">Malheureusement M3ry n'est pas en live <img
                            src="/assets/navbar/charmSVG.svg"
                            alt="charms gagnable en étant abonner à The_M3ry"/></h1>
                        <p>Mais rien est perdu ! Tu peux gagner malgré tous ton charms ! Si tu as besoin de plus
                            d'information je t'invite à te rendre <a href="/" className="text-alert-link">ici</a>.<br/>
                            Et si tu as déjà ton charms, tu peux continuer à soutenir M3ry dans ces aventures toujours
                            plus folle en regardant sa dernière vidéo
                        </p>{youtubeInfo.loading ? <Loader/> :
                        <div className="grid-no-live px-2">
                            {!isEmpty(latestVideo) && latestVideo.map(video => <Youtube
                                videoId={video.id.videoId}
                                key={video.id.videoId}/>)}
                        </div>}

                    </div>}
                </>}
            </div>
        </main>
    </>
};

export default Home;