import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {YoutubeContext} from "../context/YoutubeContext";
import Loader from "../Components/ui/Loader";
import {isEmpty} from "../utils";
import {FaPlayCircle} from "react-icons/fa";

const YoutubeList = () => {
    const globalState = useContext(YoutubeContext)
    return <>
        <main>
            <div className="container mt-12">
                <div className="youtube-layout">
                    {!isEmpty(globalState.videos) && globalState.videos.map((v, index) =>
                        <RenderMiniatureVideo video={v}/>)}
                </div>
            </div>
        </main>
    </>
};

export default YoutubeList;

export const RenderMiniatureVideo = ({video}) => {
    const thumbnailVideo = video.snippet.thumbnails.high.url
    const titleVideo = video.snippet.title
    return <>
        <div className="miniature-video">
            <div className="thumbnail-video">
                <img src={thumbnailVideo} alt="placeholder"/>
            </div>
            <div className="video-content">
                <div className="title-video" title={titleVideo}>
                    {titleVideo}
                </div>
                <div className="description-video">
                    <p>
                        {isEmpty(video.snippet.description) ? "Oups aucune description n'a été charger 👻" : video.snippet.description}

                    </p>
                </div>
                <div className="btn-group">
                    <Link to={`/videos/youtube/video_id=${video.id.videoId}`} className="button_youtube">Voir la
                        vidéo <FaPlayCircle/></Link>
                </div>
            </div>
        </div>
    </>
}