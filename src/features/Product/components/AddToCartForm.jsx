import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import QuantityField from '../../../components/form-controls/QuantityField';

AddtoCartForm.propTypes = {
    onSubmit: PropTypes.func
};

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4),
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2,0,3,0),
    },
    submit: {
        margin: theme.spacing(2,0,3),
    },
    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0
    }
}));

function AddtoCartForm({onSubmit={}}) {

    const classes = useStyles();

    const schema = yup.object().shape({
        quantity: yup.number().required('Vui lòng chọn số lượng').min(1,'Mua ít nhất 1 sản phẩm').typeError('Vui lòng nhập 1 số')
      });
    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = async (values) => {
        if (onSubmit) {
          await onSubmit(values);  
        }
    }

    // const {isSubmitting} = form.formState

    return (
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField name="quantity" label="Số lượng" form={form}></QuantityField>

                <Button
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    style={{width: '230px'}}
                >
                    Thêm vào giỏ hàng
                </Button>
            </form>
    );
}

export default AddtoCartForm;