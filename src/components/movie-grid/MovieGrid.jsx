import React, { useState, useEffect } from 'react';
import './movie-grid.scss';
import MovieCard from '../movie-card/MovieCard';
import { useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/Input';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCallback } from 'react';

const MovieGrid = props => {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { keyword } = useParams();
    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = { language:'vi-VN'};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                        break;
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, { params })
            }
            setItems(response.results)
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword])


    //button loadmore
    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1,
                language:'vi-VN'
            };
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params });
                    break;
            }
        } else {
            const params = {
                query: keyword,
                page: page + 1
                
            }
            response = await tmdbApi.search(props.category, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                }  
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Xem Th??m</OutlineButton>
                    </div>
                ) : null
            }
        </>

    )
}

//search
const MovieSearch  = props => {
    const history = useHistory();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0){
                history.push(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    )
        useEffect(()=>{
            const enterEvent = (e) => {
                e.preventDefault();
                if (e.keyCode === 13) {
                    goToSearch();
                }
            }
            document.addEventListener('keyup', enterEvent);
            return () => {
                document.removeEventListener('keyup', enterEvent);
            }
        },[keyword,goToSearch]) 

    return (
        <div className="movie-search">
            <Input 
                type="text"
                placeholder="Nh???p phim c???n t??m"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="" onClick={goToSearch}>T??m Ki???m</Button>
        </div>
    )
}

export default MovieGrid;