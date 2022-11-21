import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import Modal, { ModalContent } from '../modal/Modal';
import Button, { OutlineButton }  from '../button/Button';
import apiConfig from '../../api/apiConfig';
import './hero-slide.scss';
import { useHistory } from 'react-router-dom';



const HeroSlide = () => {
    SwiperCore.use([Autoplay]);
    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1, language:'vi-VN' }
            try {
                const response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                setMovieItems(response.results.slice(1, 5));
                console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
            // autoplay={{delay:3000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movieItems.map((item, i) => <TrailerModel key={i} item={item}/>) // show videos modal
            }
        </div>
    );
}


//Swiper header config
const HeroSlideItem = props => {
    let history = useHistory();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path); //backdrop__path la hinh anh poster tren api

    //Button Watch Trailer 
    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await tmdbApi.getVideos(category.movie, item.id);
        
        if (videos.results.length > 0)  { //results api
            const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key; //key=API https://www.youtube.com/embed/1aNyNI6P0U4
            modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc); //add class iframe set src=videSrc
        }else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }
        modal.classList.toggle('active');
      
    }
    
    return (
        <div
            className={`hero-slide__item ${props.className}`} //truyen props vao className la actice
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => history.push('/movie/' + item.id)}>
                            Xem ngay
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Xem Trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

//modal visible/hidden 
const TrailerModel = props => {
    const item = props.item;
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute('src','');


    //show iframe nothing when click button visible
    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="Trailer">

                </iframe>

            </ModalContent>
        </Modal>
    )
}


export default HeroSlide;
