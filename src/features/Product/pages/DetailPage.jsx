import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router';
import Banner from '../../../components/Banner/Banner.jsx';
import { addToCart } from '../../Cart/cartSlice.js';
import AddToCartForm from '../components/AddToCartForm.jsx';
import ProductAdditional from '../components/ProductAdditional.jsx';
import ProductDescriptions from '../components/ProductDescriptions.jsx';
import ProductDetail from '../components/ProductDetail.jsx';
import ProductMenu from '../components/ProductMenu.jsx';
import ProductsReviews from '../components/ProductsReviews.jsx';
import ThumbnailProduct from '../components/ThumbnailProduct';
import useProductDetail from '../hooks/useProductDetail';
import { useSnackbar } from 'notistack';
const useStyles = makeStyles(theme => ({
    root: {

    },
    left: {
        padding: theme.spacing(1.5),
        width: '400px',
        borderRight: `1px solid ${theme.palette.grey[300]}` 
    },

    right: {
        padding: theme.spacing(1.5),
        flex: '1 1 0'
    },
    loading: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%'
    }
}))

function DetailPage(props) {
    const namePage = "Chi tiết sản phẩm";
    const classes = useStyles()
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {
        params : {productId},
        url,
    } = useRouteMatch()

    const {product, loading} = useProductDetail(productId)

    const handleAddToCartSubmit = (formValue) => {
        console.log(formValue);
        const action = addToCart({
            id: product.id,
            product,
            quantity: formValue.quantity
        });
        console.log(action);
        dispatch(action);
        enqueueSnackbar("Thêm vào giỏ hàng thành công", { variant: 'success' });
    }


    return (
        <Box className={classes.root} style={{marginTop: '96px'}}>
            <Banner namePage={namePage}/>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            {loading ? <Box className={classes.loading}><LinearProgress/></Box> : <ThumbnailProduct product={product} />}
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductDetail product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit}/>
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu/>

                <Switch>
                    <Route exact path={url}>
                        <ProductDescriptions product={product}/>
                    </Route>
                    <Route path={`${url}/additional`} component={ProductAdditional}/>
                    <Route path={`${url}/reviews`} component={ProductsReviews}/>
                </Switch>

            </Container>
        </Box>
    );
}

export default DetailPage;