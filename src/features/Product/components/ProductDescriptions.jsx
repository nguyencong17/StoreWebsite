import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

ProductDescriptions.propTypes = {
    product: PropTypes.object,  
};

function ProductDescriptions({product = {}}) {
    return (
        <Paper style={{padding: '40px',textAlign: 'center'}}>
            <div dangerouslySetInnerHTML={{__html: product.description}}/>
        </Paper>
    );
}

export default ProductDescriptions;