import { Box, makeStyles, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import React from 'react';
FilterByService.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object   
};

const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(2),
        borderTop: `1px solid #f4f4f4`
    },
    list: {
        margin: '0',
        padding: '0',
        listStyleType: 'none',
        '&>li': {
            margin: '0',

        }
    }
}))

function FilterByService({filters = {} , onChange}) {

    const classes = useStyles();

    const handleChange = (e) => {
        if(!onChange) return;
        const {name, checked} = e.target;
        onChange({[name]: checked});
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Dịch vụ</Typography>
            <ul className={classes.list}>
                {[{value: 'isPromotion', label: 'Có khuyến mãi'},{value: 'isFreeShip', label: 'Vận chuyển miễn phí'}].map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                            <Checkbox
                            checked={filters[service.value]}
                            onChange={handleChange}
                            name={service.value}
                            color="primary"
                            />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;