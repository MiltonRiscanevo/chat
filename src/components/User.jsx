import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import {withRouter} from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const User = ({history,user, onLogout}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    
    const handleMenu = event => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        
        firebase.auth().signOut().then(()=>{
            if(onLogout) onLogout()
            history.push('/login')
        })
    };

    return (
        <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Icon>account_circle</Icon>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem >{user.name}</MenuItem>
                <MenuItem onClick={handleLogout}>Exit</MenuItem>

            </Menu>
        </div>
      );
}
 
export default withRouter(User) ;