import React, {useState, useEffect, useContext} from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ModalEnter from "../../Components/ModalEnter";
import axios from "axios";
import {ThemeContext} from "../../context/ThemeContext";
import TwitchChat from "../../Components/Twitch/TwitchChat";
import TwitchFluxVideo from "../../Components/Twitch/TwitchFluxVideo";
import Loader from "../../Components/ui/Loader";
import {FaEye} from "react-icons/fa";

const Home = () => {
    const [openSite, setOpenSite] = useState(false)
    const [infoStream, setInfoStream] = useState({
        loading: true,
        isOnLive: false
    })
    const theme = useContext(ThemeContext)
    useEffect(() => {
        const getInfoStream = async () => {
            await axios.get('http://localhost:8000/twitch')
                .then((res) => {
                    setInfoStream({
                        ...infoStream,
                        loading: false,
                        isOnLive: res.data.type === "live" && true,
                        titleStream: res.data.title,
                        viewers: res.data.viewer_count
                    })
                })
                .catch(err => {
                    console.log(err)
                    setInfoStream({
                        ...infoStream,
                        loading: false
                    })
                })
        }
        return getInfoStream()
    }, [])
    return <>
        <Navbar/>
        {/*<ModalEnter openSites={() => setOpenSite(!openSite)} status={openSite}/>*/}
        <main>
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
                        </p>
                        <div className="grid-no-live px-2">
                            <div className="box1">
                                box 1
                            </div>
                            <div className="box2">
                                box 2
                            </div>
                        </div>
                    </div>}
                </>}
            </div>
        </main>
        <Footer/>
    </>
};

export default Home;
