
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import Iframe from 'react-iframe'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import WatchList from './WatchList';
import './Watch.scss'
const Watch = () => {
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

  return (
    <>
      {
        item && (
          <>
            <div className="container">
              <div className='Watch-film'>
                <WatchList />
              </div>
              <div className="title-film">
                <h1>{item.title || item.name}</h1>
                <h3>{item.original_title}</h3>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Watch