import React from 'react';
import PropTypes from 'prop-types';
import {Box,Grid} from '@material-ui/core';
import BlogItem from './BlogItem';
BlogList.propTypes = {
    data: PropTypes.array,
};
BlogList.defaultProps = {
    data: [],
};

function BlogList({data}) {

    return (
        <Box>
            <Grid container>
                {data.map((blog) => (
                    <Grid item key={blog.id} xs={12} sm={6} md={6} lg={6}>
                        <Box padding={1}>
                            <BlogItem blog={blog} />
                        </Box>
                    </Grid>    
                ))}
            </Grid>
        </Box>
    );
}

export default BlogList;
