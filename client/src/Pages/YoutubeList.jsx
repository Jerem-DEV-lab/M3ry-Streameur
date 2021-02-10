import React from 'react';
import {useParams} from "react-router-dom";

const YoutubeList = () => {
    const {videoId} = useParams()
    return <>
        <div className="container">
            <div className="youtube-layout">
                <div className="ae">
                    1
                </div>
                <div className="e">
                    2
                </div>
                <div className="e">
                    2
                </div>

                <div className="ae">
                    1
                </div>
                <div className="ae">
                    1
                </div>
                <div className="e">
                    2
                </div>
            </div>
        </div>
    </>
};

export default YoutubeList;
