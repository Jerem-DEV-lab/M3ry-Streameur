import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {YoutubeContext} from "../../context/YoutubeContext";
import {dateTimeParser, isEmpty} from "../../utils";
import YoutubeEmbed from "../../Components/YoutubeEmbed";
import {FaArrowLeft} from "react-icons/fa";

const PageViewVideo = () => {
    const {videoId} = useParams()
    const globaleState = useContext(YoutubeContext)
    const [stateVideo, setStateVideo] = useState({})
    const [stateComment, setStateComment] = useState({})
    useEffect(() => {
        globaleState.videos.filter(videos => {
            if (videos.id.videoId === videoId) {
                setStateVideo({...stateVideo, ...videos})
            }
        })
    }, [globaleState.videos])
    useEffect(() => {
        globaleState.comments.forEach(element => {
            if (element.snippet.videoId === videoId) {
                setStateComment({
                    ...stateComment,
                    ...element.snippet
                })
            }
        })
    }, [globaleState.comments])
    return <>
        <main className="mb-5">
            {!isEmpty(stateVideo) && <>
                <div className="container pt-12">
                    <div className="link-back">
                        <Link to="/videos/youtube"> <FaArrowLeft/> Retour en arrière</Link>
                    </div>
                    <div className="grid3">
                        <YoutubeEmbed videoId={videoId}/>
                        <div className="container-info-youtube">
                            <div className="info-youtube-header">
                                <h3>{stateVideo.snippet.title}</h3>
                                <span className="date-video">{dateTimeParser(stateVideo.snippet.publishedAt)}</span>
                            </div>
                            <div className="info-youtube-body">
                                <p>
                                    {stateVideo.snippet.description}
                                </p>
                            </div>
                            <div className="info-youtube-footer">
                                <a href={`https://www.youtube.com/watch?v=${videoId}&feature=emb_logo`} target="_blank"
                                   rel="noreferrer noopener " className="button_youtube">Like</a>
                                <a href="https://www.youtube.com/c/M3RYLAND/featured" className="button_share_youtube"
                                   target="_blank" rel="noreferrer noopener ">Abonne toi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </main>
    </>
};

export default PageViewVideo;
