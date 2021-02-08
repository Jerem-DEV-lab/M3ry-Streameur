import React, {useState, useEffect, useContext} from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ModalEnter from "../../Components/ModalEnter";
import axios from "axios";
import {ThemeContext} from "../../context/ThemeContext";
import TwitchChat from "../../Components/Twitch/TwitchChat";

const Home = () => {
    const [openSite, setOpenSite] = useState(false)
    const [titleStream, setTitleStream] = useState("")
    const theme = useContext(ThemeContext)
    console.log(theme)

    useEffect(() => {
        const getInfoStream = async () => {
            await axios.get('http://localhost:8000/twitch')
                .then((res) => {
                    console.log(res.data)
                    setTitleStream(res.data.title)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        //getInfoStream()
    }, [])
    return <>
        <Navbar/>
        <ModalEnter openSites={() => setOpenSite(!openSite)} status={openSite}/>
        <main className="overflow-hidden">
            <div className="container">
                <div id="twitch-embed">
                    <iframe src="https://player.twitch.tv/?channel=the_m3ry&parent=localhost" id="frame-video"
                            frameBorder="0"
                            allowFullScreen="true" scrolling="no"/>
                    <TwitchChat theme={theme}/>
                </div>
                {titleStream && <h2>{titleStream}</h2>}
            </div>
        </main>
        <Footer/>
    </>
};

export default Home;
