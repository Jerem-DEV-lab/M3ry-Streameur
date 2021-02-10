import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";

const PageViewVideo = () => {
    return <>
        <Navbar/>
        <main>
            <div className="container pt-12 px-2">
                <div className="grid3">
                    <div className="box1">
                        <img src="/assets/player/player.png" alt="" onClick={() => console.log("je clique")}/>
                    </div>
                    <div className="container-info-youtube">
                        <div className="info-youtube-header">
                            <h3>Le titre de ta video</h3>
                            <span className="date-video">07 Fev 2021</span>
                        </div>
                        <div className="info-youtube-body">
                            <p>
                                Ici la description complète de ta vidéo youtube, je vais donc mettre du texte qui ne sert à rien mais c'est pour imaginer une longue description
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
};

export default PageViewVideo;
