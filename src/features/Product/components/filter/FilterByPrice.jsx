import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core'
FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2),
        borderTop: `1px solid #f4f4f4`
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        alignItems: 'center',
        '&>span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    },
    range2: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItem: 'center',
        justifyContent: 'space-between',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    }
}))

function FilterByPrice({onChange}) {

    const classes = useStyles();

    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const handleClickApply = () => {
        console.log(values);
        if(onChange) onChange(values);
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        })
    } 

    const handleClickReset = () => {
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        })
        console.log(values)
    } 

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Chọn Khoảng Giá</Typography>
            <Box className={classes.range}>
                <TextField name="salePrice_gte" values={values.salePrice_gte} onChange={handleChange} id="outlined-basic" variant="outlined" size="small"/>
                <span> - </span>
                <TextField name="salePrice_lte" values={values.salePrice_lte} onChange={handleChange} id="outlined-basic" variant="outlined" size="small"/>
            </Box>
            <Box className={classes.range2}>
                <Button variant="outlined" color="primary" onClick={handleClickApply}>Áp dụng</Button>
                <Button variant="outlined" color="primary" onClick={handleClickReset}>Reset</Button>
            </Box>
        </Box>
    );
}

export default FilterByPrice;