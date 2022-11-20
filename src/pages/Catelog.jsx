import React from 'react';

import { useParams } from 'react-router';
import { category as cate } from '../api/tmdbApi';
import PageHeader from '../components/Page-Header/PageHeader';

const Catelog = () => {

  const { category} = useParams();
  console.log(category);

  
  return (
    <>
     <PageHeader>
      {category === cate.movie ? 'Movie' : 'TV Series'}
     </PageHeader>
    </>
  )
}

export default Catelog; 