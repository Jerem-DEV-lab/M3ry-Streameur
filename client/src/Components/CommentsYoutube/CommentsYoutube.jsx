import React from 'react';
import {isEmpty} from "../../utils";

const CommentsYoutube = ({comments}) => {
    const commentState = {
        totalReplyCount: comments.totalReplyCount
    }
    return <>
        {!isEmpty(comments) && <>
            <div className="yt-comments">
                <div className="numbers-comments">
                    {commentState.totalReplyCount}
                </div>
                <div className="comment">

                </div>
            </div>
        </>}
    </>
};

export default CommentsYoutube;
