import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/common.js';
// import ReactImageMagnify from 'react-image-magnify';

ThumbnailProduct.propTypes = {
    product: PropTypes.object,
};

// const useStyles = makeStyles(theme => ({
//     smallImage: {
//         paddingTop: theme.spacing(1),
//         borderRadius: '4px',
//     },
//     active: {
//         borderColor: theme.palette.primary.main
//     }
// }))

function ThumbnailProduct({product = {}}) {
    // const classes = useStyles()
    const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER
    // const handleClickImg = (e) => {
    //     const elementImg = e.target
    //     if(elementImg.classList.contains('active')) {
    //         elementImg.classList.remove('active')
    //     } else {
    //         elementImg.classList.add('active')
    //     }
    // }
    return (
        <Box>
            <img 
                    src={thumbnailUrl}
                    alt={product.name}
                    width="100%"
            />
        </Box>
    );
}

export default ThumbnailProduct;