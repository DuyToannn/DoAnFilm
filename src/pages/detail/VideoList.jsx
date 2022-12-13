
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

const VideoList = props => {
    const { category } = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id]);
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
            >
                {
                    videos.map((item, i) => (
                        <SwiperSlide key={i} className="swiper-slide-trailer">
                            <div>
                                <Video item={item} />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </>
    )
}
const Video = props => {
    const item = props.item;
    const iframeRef = useRef(null);
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height)
    }, [])
    return (
        //https://hd.1080phim.com/share/214f9424bd924def149681f47e629ad7
        <div className="video">
            <div className="video__title">
                <iframe
                    src={`http://www.youtube.com/embed/${item.key}`}
                    ref={iframeRef}
                    width="100%"
                    title="video"
                    allowFullScreen="true"
                ></iframe>
            </div>
        </div>
    )
}
export default VideoList