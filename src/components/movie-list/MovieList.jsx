import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './movie-list.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import tmdbApi, { category } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = { language: 'vi-VN' };
            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params })
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });

                }
            } else {
                response = await tmdbApi.similar(props.category, props.id)
            }
            setItems(response.results);
        }
        getList();
    }, []);
    return (
        <div className='movie-list'>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidePerViews={'auto'}
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div >
    )
}
MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieList;