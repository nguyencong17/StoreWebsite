import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

ProductSort.propTypes = {
    currentSort : PropTypes.string.isRequired,
    onChange : PropTypes.func
};

function ProductSort({currentSort, onChange}) {

    const handleSortChange = (even, newValue) => {
        if(onChange) onChange(newValue);
    }

    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
        >
            <Tab label="Giá thấp" value="ASC"></Tab>
            <Tab label="Giá cao" value="DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;