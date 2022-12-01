import React, { useState, useEffect } from 'react'
import "../videos/videos.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Videos = () => {

    const [video, setVideo] = useState([]);
    const [videoApi, setVideoApi] = useState([]);


    //third party api 
    useEffect(() => {

        let Api = "AIzaSyD6qmuXCwu0Q0ALsFy5lJm_Nqwy2S5dVYo";
        let http = "https://www.googleapis.com/youtube/v3/videos?";

        fetch(http + new URLSearchParams({
            key: Api, part: "snippet", chart: "mostPopular", maxResults: 50, regionCode: "ES"
        }))
            .then(res => res.json())
            .then(data => {
                setVideo(data.items);
            });

    }, []);

    //local serve api   

    useEffect(() => {
        axios.get("https://multiverse-ott.onrender.com/api/allalbums").then((res) => setVideoApi(res.data));

    }, [])



    return (
        <>
            <h1 className='Vt'>Most Popular Multiverse Videos</h1>

            <div className='container1'>
                {videoApi.map((files) => {
                    return (
                        <Link to={{pathname:"/videoswatch",file:files}}>
                            <img src={files.poster} className="apiImg" key={files._id} alt="..." />
                        </Link>
                    )


                })}

            </div>

            <hr />
            <div className='containerVideos'>
                {video.map((data) => {
                    const { snippet = {} } = data;
                    const { thumbnails = {} } = snippet;
                    const { medium = {} } = thumbnails;

                    return (
                        <div className='videosImg'>
                            <img className='videosImg' src={medium.url} key={data.id} alt="..." />
                        </div>

                    )

                })}


            </div>
        </>
    )
}

export default Videos
