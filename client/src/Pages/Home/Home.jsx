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
import {Link} from "react-router-dom";
import LiveOff from "../../Components/LiveOff/LiveOff";
import LiveOn from "../../Components/LiveOn/LiveOn";

const Home = () => {
    const [openModal, setOpenModal] = useState(statusModal)
    const infoStream = useContext(TwitchContext)
    const theme = useContext(ThemeContext)
    const youtubeInfo = useContext(YoutubeContext)
    const [latestVideo, setLatestVideo] = useState([])
    useEffect(() => {
        if (!isEmpty(youtubeInfo.videos)) {
            setLatestVideo([youtubeInfo.videos[0], youtubeInfo.videos[1]])
        }
    }, [youtubeInfo])

    function openModalSite() {
        setOpenModal(true)
        window.sessionStorage.setItem("m3ry_modal_opened", "true")
    }

    function statusModal() {
        return window.sessionStorage.getItem("m3ry_modal_opened");
    }

    return <>
        <ModalEnter openModal={openModalSite} status={openModal}/>
        <main className="mb-5">
            <div className={`container overflow-hidden ${!infoStream.isOnLive ? "pt-8" : ""}`}>
                {infoStream.loading ? <div className="c-loader"><Loader/></div> : <>
                    {infoStream.isOnLive ? <>
                        <LiveOn infoStream={infoStream} chatTheme={theme}/>
                    </> : <LiveOff latestVideo={latestVideo}/>}
                </>}
            </div>
        </main>
    </>
};

export default Home;