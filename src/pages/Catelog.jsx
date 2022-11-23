import React from 'react';

import { useParams } from 'react-router';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';
import PageHeader from '../components/Page-Header/PageHeader';

const Catelog = () => {
  const { category } = useParams();
  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catelog; 