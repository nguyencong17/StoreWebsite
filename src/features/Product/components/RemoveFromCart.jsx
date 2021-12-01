import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from'prop-types'
RemoveFromCart.propTypes = {
    onRemove: PropTypes.func
};

function RemoveFromCart(props) {
    const {onRemove} = props;
    const handleRemove = async (values) => {
        if (onRemove) {
          await onRemove(values);  
        }
    }
    return (
        <div>
            <Button variant="outlined" height="40px" style={{justifyContent: 'flex-end', marginLeft:'410px'}} onClick={handleRemove}>Xóa Hàng</Button>
        </div>
    );
}

export default RemoveFromCart;