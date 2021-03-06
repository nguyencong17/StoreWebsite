import { Box, FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        maxWidth: '200px',
    }
}))

function QuantityField(props) {
    const classes = useStyles();
    const {form, name} = props;
    const {control,setValue} = form;

    // const [showPassword,setShowPassword] = useState(false);

    // const toggleShowPassword = () => {
    //     setShowPassword(!showPassword)
    // }

    return (
        <div>
            <Typography>Số lượng</Typography>
            <Controller
                name={name}
                control={control}
                
                render={({field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, error }
                }) => (
                    <>

                        <FormControl error={isTouched && invalid} fullWidth margin="normal" variant="outlined" size="small">
                            <Box className={classes.box}>
                            <IconButton onClick={() => setValue(name,Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                                <RemoveCircleOutline/>
                            </IconButton>
                            <OutlinedInput
                                id={name}
                                error={invalid}
                                type="number"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                            <IconButton onClick={() => setValue(name,Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                                <AddCircleOutline/>
                            </IconButton>
                            </Box>
                        </FormControl>
                        <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                    </>
                )}  
            />
        </div>)
}

export default QuantityField;