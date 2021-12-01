import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.scss';
Banner.propTypes = {
   namePage: PropTypes.string.isRequired
};

function Banner(props) {
    const {namePage} = props; 
    return (
        <div className="content__banner">
            <img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/Heaphone/9.jpg" alt=""/>
            <div className="banner--underground"></div>
            <div className="banner--title">
            <h1>{namePage}</h1>
            <NavLink to="/" exact><Button color="inherit" style={{textTransform: 'none'}}>Trang Chủ</Button></NavLink><span> / </span><span>{namePage}</span>
            </div>
        </div>
    );
}

export default Banner;