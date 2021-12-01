import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core'
import FilterByCategory from './filter/FilterByCategory.jsx';
import FilterByPrice from './filter/FilterByPrice.jsx';
import FilterByService from './filter/FilterByService.jsx';
ProductFilters.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
};

function ProductFilters({filters={},onChange={}}) {

    // const {filters, onChange} = props;
    
    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;
        const newFilters = {
            ...filters,
            "category.id": newCategoryId
        }
        onChange(newFilters);
    }

    const handleChange = (newValues) => {
        if(!onChange) return;
        const newFilters = {
            ...filters,
            ...newValues,
        }
        onChange(newFilters);
    }

    return (
        <div>
            <Box>
                <FilterByCategory onChange={handleCategoryChange}/>
                <FilterByPrice onChange={handleChange}/>
                <FilterByService filters={filters} onChange={handleChange}/>
            </Box>
        </div>
    );
}

export default ProductFilters;