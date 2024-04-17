import React, { useRef } from 'react';

function VideoExam(){
    // useRef videoRef 변수에 할당
    const videoRef = useRef(null);

    const playVideo = () => {
        videoRef.current.play();
    }
    const pauseVideo = () => {
        videoRef.current.pause();
        // videoRef.current.remove();
    }
    return(
        <div>
            <div>
                <button onClick={playVideo}>play</button>
                <button onClick={pauseVideo}>pause</button>
            </div>
            <video ref={videoRef} width="320" height="240" controls>
                <source 
                    type='video/mp4'
                    src='https://vod-progressive.akamaized.net/exp=1713354533~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3928%2F21%2F544643152%2F2582709044.mp4~hmac=7f58195645ec7537e89bbf39eab52e0812129e50d6caea6d8fe1ac2f0b337b8b/vimeo-prod-skyfire-std-us/01/3928/21/544643152/2582709044.mp4'
                />
            </video>
        </div>
    )
}

export default VideoExam;