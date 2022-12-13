import React from 'react';
import './BtnWatch.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const BtnWatch = (props) => {

    const item = props.item;
    const link =   '/' + category[props.category] + '/' + item.id + '/watch';

  return (
    <Link to={link} className="link-watch">
            <Button className="btn-Watch">
                <i className='bx bx-play'></i>
                <h3>Xem ngay</h3>
            </Button>
    </Link>
  )
}

export default BtnWatch;