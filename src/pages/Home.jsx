import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './Home.scss'
const Home = () => {

  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>PHIM THỊNH HÀNH</h2>
            <Link to="/movie">
              <OutlineButton className="small">Xem thêm
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />

        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>TOP XẾP HẠNG</h2>
            <Link to="/movie">
              <OutlineButton className="small">Xem thêm
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Chương trình TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">Xem thêm
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </div>
  );
}

export default Home;