import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss';
import { category } from '../../api/tmdbApi';
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import imdb from '../../assets/imdb.png'
import BtnWatch from '../watch/BtnWatch';
import MovieCard from '../../components/movie-card/MovieCard';
const Details = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const getDetail = async () => {
      //const params = { page: 1, language:'vi-VN' }
      const response = await tmdbApi.detail(category, id, { params: { language: 'vi-VN' } });
      setItem(response);
      window.scrollTo(0, 0);
    }
    getDetail();
  }, [category, id]);

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${padTo2Digits(hours)} giờ ${padTo2Digits(minutes)} phút`;
  }
  function padTo2Digits(num) {
    return num.toString().padStart(2);
  }
  function reformatDate(dateStr) {
    var dArr = dateStr.split("-");
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(0); 
  }
  return (
    <>

      {
        item && (
          <>
            <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}> </div>
            <div className="mb-3 movie-content container">
              <div className="movie-content__poster">
                <div className="movie-content__poster__img" style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})` }}>
                </div>
                <BtnWatch item={item} category={category} />
              </div>
              <div className="movie-content__info">
                <h1 className="title">
                  {item.title || item.name}
                </h1>
                <div className="genres">
                  {
                    item.genres && item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="genres__item">{genre.name}</span>
                    ))
                  }
                </div>
                <p className="runtime">{toHoursAndMinutes(item.runtime)}</p>
                <p class="vote-film"><img className='img-imdb' src={imdb} alt="" />{item.vote_average.toFixed(1)}</p>
                <p class="release-film">KHỞI CHIẾU {reformatDate(item.release_date)}</p>
                <p className="character">{item.character}</p>
                <p className="overview">{item.overview}</p>
                <div className="cast">
                  <div className="section__header">
                    <h2>DIỄN VIÊN</h2>

                  </div>
                  <CastList id={item.id} />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="section mb-3">
                <h3 className='title-trailer'>TRAILER</h3>
                <VideoList id={item.id} />
              </div>
              <div className="section mb-3">
                <div className="section__header mb-2">
                  <h2>PHIM TƯƠNG TỰ</h2>
                </div>
                <MovieList category={category} type="similar" id={item.id} />
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Details;