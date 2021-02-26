import React from 'react';
import {Link} from "react-router-dom";
import {isEmpty} from "../../utils";

const LiveOff = ({latestVideo}) => {
    console.log(latestVideo)
    return <>
        <div className="no-live">
            <h1 className="h1">Malheureusement M3ry n'est pas en live <img
                src="/assets/navbar/charmSVG.svg"
                alt="charms gagnable en étant abonner à The_M3ry"/></h1>
            <p>Mais rien est perdu ! Tu peux gagner malgré tous ton charms ! Si tu as besoin de plus
                d'information je t'invite à te rendre <Link to="/aide/charms"
                                                            className="text-alert-link">ici</Link>.<br/>
                Et si tu as déjà ton charms, tu peux continuer à soutenir M3ry dans ces aventures toujours
                plus folle en regardant sa dernière vidéo
            </p>
            <div className="grid-no-live px-2">
                {!isEmpty(latestVideo) && latestVideo.map(video => <>
                    <Link to={`/videos/youtube/video_id=${video.id.videoId}`}>
                        <div className="card-youtube">
                            <div className="card-youtube_content">
                                <div className="card-youtube-img">
                                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </>)}
            </div>

        </div>
    </>
};

export default LiveOff;
/*
latestVideo.map((video) => <Youtube
    videoId={video.id.videoId}
    key={video.id.videoId}/>)*/
