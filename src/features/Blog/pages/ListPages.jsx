import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import blogAPI from '../../../api/blogAPI.js';
import Banner from '../../../components/Banner/Banner.jsx';
import BlogList from '../components/BlogList';
import BlogListSkeleton from '../../Blog/components/BlogListSkeleton.jsx';
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
function ListBlog(props) {
    const namePage = "Sản Phẩm";
    const  classes = useStyles();
    // history = useHistory();
    //const location = useLocation();

    //set data vào state
    const [blogList, setBlogList] = useState([]);
    // const [pagination, setPagination] = useState({
    //     _limit:12,
    //     _totalRows:10,
    //     _page: 1
    // });
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            try {
                const data = await blogAPI.getAll();
                setBlogList(data);
                //setPagination(pagination);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        })(); 
     },[]);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>

                    {/* <Grid item className={classes.left}>
                        <Paper elevation={0}>
                        {loading ? <FilterSkeleton length={12}/> : <ProductFilters filter={queryParams} onChange={handleFilterChanges}/>} 
                        </Paper>
                    </Grid> */}

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? <BlogListSkeleton length={12}/> : <BlogList data={blogList}/>}
                            {/* <Box className={classes.pagination}>
                                <Pagination color="primary" onChange={handlePageChanges} count={Math.ceil(pagination._totalRows / pagination._limit)} page={pagination.page}></Pagination>
                            </Box> */}
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
        </Box>
 );
}

export default ListBlog;