import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
const Home = () => {
  
  const [like, setLike] = useState(false);
 
  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Treding Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">Xem thêm</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
         
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">Xem thêm</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">Xem thêm</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>
      </div>
    </div>
  );
}

export default Home;