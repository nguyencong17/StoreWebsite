import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
BlogItem.propTypes = {
    blog:PropTypes.object,
};


const useStyles = makeStyles(theme => ({
    it: {
        cursor: 'pointer',
        '&:hover' : {
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
        },
    },
    name: {

    },

}))

function BlogItem(props) {
    const classes = useStyles();
    const history = useHistory();
    const {blog} = props;
    const handleClick = () => {
        history.push(`/blogs/${blog.id}`);
    }
    return (
        <Box padding={1} className={classes.it} onClick={handleClick}>
            <Box paddingBottom={1} minHeight="215px">
                <img src={blog.image} width="100%"/>
            </Box>
            <Typography variant="body2" mt={1} style={{fontFamily: 'var(--font-secondary)',fontSize: '26px',color: 'var(--color-main)'}}>{blog.name}</Typography>
            <Typography variant="body2" mt={1} style={{fontFamily: 'var(--font-main)',fontSize: '14px', padding: '10px 0'}}>{blog.date}</Typography>
            <Typography variant="body2" style={classes.description}>{blog.description}</Typography>
        </Box>
    );
}

export default BlogItem;