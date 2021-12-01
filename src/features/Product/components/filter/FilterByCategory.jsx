import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import categoryAPI from '../../../../api/categoryAPI.js'
FilterByCategory.propTypes = {
    onChange : PropTypes.func 
};

const useStyles = makeStyles(theme => ({
    root: {
        padding : theme.spacing(2)
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyleType:'none',
        '& > li': {
            marginTop: theme.spacing(1),
            transition: 'all .25s',
            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: 'pointer'
            }
        }
    }
}))

function FilterByCategory(props) {

    const {onChange} = props; 

    const classes = useStyles();

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        ( async () => {
            try {
                const list = await categoryAPI.getAll();
                setCategoryList(list.map((x) => ({
                    id:x.id,
                    name: x.name,
                })));
            } catch (error) {
                console.log('Failed to fetch category list',error);
            }
        })()
    },[]);

    const handleCategoryClick = (category) => {
        if(onChange){
            onChange(category.id);
        }
    }

    return (
        <Box className={classes.root}>
            <Typography varriant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
            <ul className={classes.menu}>            
                {categoryList.map
                ((category) => (<li key={category.id} onClick={() => handleCategoryClick(category)}>
                <Typography varriant="body2">{category.name}</Typography>
                </li>))
                }
            </ul>
        </Box>
    );
}

export default FilterByCategory;