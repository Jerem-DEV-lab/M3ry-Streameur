import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {YoutubeContext} from "../context/YoutubeContext";
import Loader from "../Components/ui/Loader";
import {isEmpty} from "../utils";
import Footer from "../Components/Footer/Footer";

const YoutubeList = () => {
    const globalState = useContext(YoutubeContext)

    return <>
        <div className="container mb-5">
            <h1 className="h1 mt-10">Les vidéos de M3ry :</h1>
            <div className="youtube-layout">
                {!isEmpty(globalState) && globalState.loading ? <Loader/> : globalState.videos.map((v, index) => <>
                    <div className="miniature-video-YT" key={index}>
                        <div className="miniature-photo-YT">
                            <Link to={`/videos/youtube/video_id=${v.id.videoId}`}>
                                <img src={v.snippet.thumbnails.medium.url} alt={v.snippet.title}/>
                            </Link>
                        </div>
                        <div className="miniature-body-YT">
                            <div className="title-video-YT">
                                <h4>{v.snippet.title}</h4>
                            </div>
                            <div className="desc-video-YT">
                                <p>{isEmpty(v.snippet.description) ? "Oups aucune description n'a été charger 👻" : v.snippet.description}</p>
                            </div>
                            <div className="miniature-footer-YT">
                                <Link to={`/videos/youtube/video_id=${v.id.videoId}`} className="button_youtube">Voir la vidéo</Link>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
        <Footer/>
    </>
};

export default YoutubeList;
