import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
import {makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router';
ProductItem.propTypes = {
    product:PropTypes.object,
};


const useStyles = makeStyles(theme => ({
    it: {
        cursor: 'pointer',
        '&:hover' : {
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        }
    },
}))

function ProductItem(props) {
    const classes = useStyles();
    const history = useHistory();
    const {product} = props
    let thumbnail = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
    const handleClick = () => {
        history.push(`/products/${product.id}`);
    }
    return (
        <Box padding={1} className={classes.it} onClick={handleClick}>
            <Box paddingBottom={1} minHeight="215px">
                <img src={thumbnail} width="100%" alt={product.name} />
            </Box>
            <Typography variant="body2" mt={1}>{product.name}</Typography>
            <Typography variant="body2" >
                <Box component="span"  fontSize='16px' fontWeight="bold" mr={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default ProductItem;