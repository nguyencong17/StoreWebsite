import { Box, makeStyles, Typography,Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
// import formatPrice from '../../utils/common.js';
import './Item.scss'
Item.propTypes = {
    product:PropTypes.object,
    quantity: PropTypes.number,
};


const useStyles = makeStyles(theme => ({
    // it: {
    //     cursor: 'pointer',
    //     display: 'flex',
    //     flexWrap: 'nowrap',
    //     // justifyContent: 'space-between',
    //     margin: '20px 0px',
    //     alignItems: 'center',
    //     // '&:hover' : {
    //     //     boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    //     // }
    // },
    // desItem: {
    //     padding: '0 20px',
    // }
}))

function Item(props) {
    const {product,quantity} = props;
    // const classes = useStyles();
    const thumbnail = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

    return (
        <Box padding={1} style={{display: 'flex'}}>
                    <div className="image">
                        <img src={thumbnail} alt=""/>
                    </div>
                    <div className="information" style={{width: '400px'}}>
                        <h5 className="product-name">{product.name}</h5>
                        <p className="product-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}</p>
                        <div className="quantity">

                            <div className="quan">

                                <div className="dec button">-</div>

                                <input type="text" id="quantity" name="quantity" value={quantity} min="1"/>

                                <div className="inc button">+</div>

                                <p className="min-qty-alert" style={{display: 'none'}}>Minimum quantity should be 1</p>
                            </div>
                        </div>
                    </div>
                    <i className="fas fa-times-circle remove"></i>
        </Box>
    );
}

export default Item;