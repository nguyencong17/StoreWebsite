// import Box from '@mui/material/Box';
import { Box, Container, Grid, Paper, Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item/Item.jsx';
import { cartTotalSelector } from './selector.js';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../Cart/cartSlice.js'
import RemoveFromCart from '../Product/components/RemoveFromCart.jsx';
import Order from './Item/InformationOrder/Order.jsx';
import './Cart.scss'
CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const totalPrice = useSelector(cartTotalSelector);

    const listCart = useSelector((state) => state.cart.cartItems) ;

    //const showMiniCart = useSelector((state) => state.cart.showMiniCart);

    const dispatch = useDispatch();

    // const handleClickRemoveProduct = (valueRemove) =>
    // {
    //     console.log(valueRemove);
    //     const action = removeFromCart()
    //     dispatch(action)
    // }

    return (
        <Box style={{marginTop: '96px', padding: '0'}}>
        <Paper elevation={0}>
        <div className="container content-main">
        <div className="row">
            <div className="col-md-8 col-sm-12 cart-product">
                <h5 className="title">SẢN PHẨM</h5>
                {listCart.map((item) => (
                        <Grid item key={item.id} xs={12} sm={12} md={10} lg={10} style={{margin: '0'}}>
                            <Box padding={1} style={{display: 'flex', justifyContent: 'space-between', padding: '0'}}>
                                <Item product={item.product} quantity={item.quantity} style={{padding: '20px 0'}}/>
                                {/* <RemoveFromCart onRemove={handleClickRemoveProduct}/> */}
                            </Box>
                        </Grid>    
                ))}    
                <hr style={{width: '100%'}}/>
                <div className="row action">
                    <div className="col-md-4 col-sm-6 btn btn-dark continue" style={{fontSize: '14px'}}>
                        Tiếp tục Shopping
                    </div>
                    <div className="col-md-3 col-sm-6 btn btn-dark update-cart" style={{fontSize: '14px'}}>
                        Dọn Giỏ
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-12 checkout">
                <Order total={totalPrice}/>
            </div>

        </div>
        </div>
        </Paper>

        
      </Box>
    );
}

export default CartFeature;