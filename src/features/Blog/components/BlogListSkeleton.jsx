import React from 'react';
import PropTypes from 'prop-types';
import {Box,Grid} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

BlogListSkeleton.propTypes = {
    length: PropTypes.number,
};
BlogListSkeleton.defaultProps = {
    length:10,

}

function BlogListSkeleton({length}) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x,index) => (
                    <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
                        <Box padding={1}>
                            <Skeleton variant="rect" width="100%" height={200} />
                            <Skeleton />
                            <Skeleton width="100%" />
                        </Box>
                    </Grid>    
                ))}
            </Grid>
        </Box>
    );
}

export default BlogListSkeleton;
