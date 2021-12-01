import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import productAPI from '../../../api/productAPI';
import Banner from '../../../components/Banner/Banner.jsx';
import FilterSkeleton from '../components/filter/FilterSkeleton.jsx';
import FilterViewer from '../components/filter/FilterViewer.jsx';
import ProductFilters from '../components/ProductFilters.jsx';
import ProductList from '../components/ProductList';
import ProductListSkeleton from '../components/ProductListSkeleton';
import ProductSort from '../components/ProductSort.jsx';
const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '20px',
    },
}))
function ListPage(props) {
    const namePage = "Sản Phẩm";
    const  classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: "salePrice",
            _order: params._order || "ASC",
            
            isPromotion: params.isPromotion === "true",
            isFreeShip: params.isFreeShip === "true",

        }
    }, [location.search])
    //set data vào state
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        _limit:12,
        _totalRows:10,
        _page: 1
    });
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            try {
                const {data,pagination} = await productAPI.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        })(); 
     },[queryParams]);

     const handlePageChanges = (e,page) => {
        // setFilters((prevFilters)=>({
        //     ...prevFilters,
        //     _page:page,
        // }));
        const filters = {
            ...queryParams,
            _page:page
        };

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        })
     };

     const handleSortChanges = (newOrderValue) => {
        // setFilters((prevFilters)=>({
        //     ...prevFilters,
        //     _order:newSortValue
        // }));

        //let newSorts = "salePrice&" + newSortValue;
        //console.log(newOrderValue)
        const filters = {
            ...queryParams,
            _order: newOrderValue
        };
            // let decodeURI = decodeURIComponent()
        console.log(filters)
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        })
     };

     const handleFilterChanges = (newFilter) => {
        // setFilters((prevFilters)=>({
        //     ...prevFilters,
        //     ...newFilter
        // }));

        const filters = {
            ...queryParams,
            ...newFilter
        };

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        })
        
     };

     const setNewFilter = (newFilters) => {
        //  setFilters(newFilters);

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters)
        })
     }

    return (
        <Box style={{marginTop: '96px'}}>
            <Banner namePage={namePage}/>
            <Container>
                <Grid container spacing={1}>

                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                        {loading ? <FilterSkeleton length={12}/> : <ProductFilters filter={queryParams} onChange={handleFilterChanges}/>} 
                        </Paper>
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._order} onChange={handleSortChanges}  />
                            <FilterViewer filters={queryParams} onChange={setNewFilter} />
                            {loading ? <ProductListSkeleton length={12}/> : <ProductList data={productList}/>}
                            <Box className={classes.pagination}>
                                <Pagination color="primary" onChange={handlePageChanges} count={Math.ceil(pagination._totalRows / pagination._limit)} page={pagination.page}></Pagination>
                            </Box>
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
        </Box>
 );
}

export default ListPage;