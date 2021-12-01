import { Box, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { AccountCircle, Close } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import { cartItemsCountSelector } from '../../features/Cart/selector.js';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity:1,
    zIndex: 100,
    minWidth: '1400px',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    '&>header': {
      boxShadow: 'unset',
    }
  },
  bgMainheader: {
    backgroundColor: '#f4f4f4'
  },
  container: {
    display: 'flex',
    width: '90%',
    margin: 'auto',
    padding: '16px 0' ,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // width: '200px',
  },
  link: {
      textDecoration: 'none',
      color: '#000',
      '&>button': {
        fontSize: '18px',
        textTransform: 'none',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        padding: '8px 26px',
        '&:hover': {
          color: '#f87a61',
          backgroundColor: 'none',
        }
      }
  },
  logo:  {
      color: '#fff',
  },
  closeBtn: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    zIndex: 1,
  },
  iconlogin: {
    color: '#000!important',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '15px',
  },
  action: {
    display: 'flex',
    alignItems: 'center'
  }
}));
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
  };
export default function Header() {
  const classes = useStyles();

  const loggedInUser = useSelector(state => state.user.current)
  const isLoggedIn =  !!loggedInUser.id;

  const cartItemsCount = useSelector(cartItemsCountSelector)

  const [open, setOpen] = React.useState(false);

  const [mode,setMode] = useState(MODE.LOGIN);

  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();

  //dispatch logout
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (_event, reason) => {
    if(reason==='escapeKeyDown' || reason === 'backdropClick') return ;
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  }

  const handleCartClick = () => {
    history.push('/cart');
  }

  // const handleClose2 = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bgMainheader}>
        <Toolbar>
          {/* <FormatAlignCenterIcon className={classes.menuButton}/> */}
          <div className={classes.container}>
          {/* <Typography variant="h6" className={classes.title}>
           
          </Typography> */}
          <Link to="/" className={classes.logo}><img src="https://nguyencong17.github.io/HeaphoneStore/assets/image/logo.png" alt="" style={{width:'170px'}} /></Link>
          <div className="nav">
            <NavLink className={classes.link} to="/products">
              <Button color="inherit">Danh Mục</Button>
            </NavLink>
            <NavLink className={classes.link} to="/blogs">
              <Button color="inherit">Blog</Button>
            </NavLink>
            <NavLink className={classes.link} to="/weservice">
              <Button color="inherit">Dịch Vụ</Button>
            </NavLink>
            <NavLink className={classes.link} to="/faq">
              <Button color="inherit">Thắc Mắc</Button>
            </NavLink>
            {/* <NavLink className={classes.link} to="/contact">
              <Button color="inherit">Liên Hệ</Button>
            </NavLink> */}
            <NavLink className={classes.link} to="/about">
              <Button color="inherit">về Chúng Tôi</Button>
            </NavLink>
          </div>
          <div className={classes.action}>
            <IconButton size="medium" aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCartIcon fontSize="medium" color="primary" style={{color: '#000'}}/>
            </Badge>
          </IconButton>
            {!isLoggedIn && (
              <Button color="inherit" onClick={handleClickOpen} className={classes.iconlogin}>
                ĐĂNG NHẬP
              </Button>
            )}

            {isLoggedIn && (
              <IconButton color="secondary" onClick={handleUserClick} >
                <AccountCircle />
              </IconButton>
            )}
          </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* dropdown */}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>


      <Dialog
      // disableBackdropClick
      disableEscapeKeyDown  
      open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
        <IconButton className={classes.closeBtn} onClick={handleClose}>
          <Close/>
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose}></Register>
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already an account. Login here 
                  </Button>
                </Box>
              </>
            )}
            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose}></Login>
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                    Don't have an account. Register here 
                  </Button>
                </Box>
              </>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
