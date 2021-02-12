import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import {YoutubeContext} from "../../context/YoutubeContext";
import {dateTimeParser, isEmpty} from "../../utils";
import YoutubeEmbed from "../../Components/YoutubeEmbed";
import CommentsYoutube from "../../Components/CommentsYoutube/CommentsYoutube";

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
                                <a href="/" className="button_youtube">Like</a>
                                <a href="/" className="button_share_youtube">Partager</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </main>
    </>
};

export default PageViewVideo;
