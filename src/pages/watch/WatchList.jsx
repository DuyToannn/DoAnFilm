
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import Iframe from 'react-iframe'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';


const WatchList = () => {
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
                    <Iframe url={`${apiConfig.filmUrl}${item.id}`}
                        width="100%"
                        height="620px"
                        id={item.id}
                        className=""
                        display="block"
                        position="relative" />
                </>
            )
        }
    </>
    )
}

export default WatchList