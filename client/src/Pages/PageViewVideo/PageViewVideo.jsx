import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import {YoutubeContext} from "../../context/YoutubeContext";
import {isEmpty} from "../../utils";
import YoutubeEmbed from "../../Components/YoutubeEmbed";

const PageViewVideo = () => {
    const {videoId} = useParams()
    const videos = useContext(YoutubeContext)
    const [playerInfo, setPlayerInfo] = useState({
        loading: true
    })
    useEffect(() => {
        if(!isEmpty(videos.items)){
            const array = videos.items.filter(v => v.id.videoId === videoId)
            setPlayerInfo({...playerInfo, loading: false, videoDetails: {...array[0]}})
        }
    }, [videos.items])
    //todo: Mettre les données récupérer pour afficher la vidéo
    return <>
        <main>
            <div className="container pt-12 px-2">
                <div className="grid3">
                        <YoutubeEmbed videoId={videoId}/>
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
