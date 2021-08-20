import React from 'react';
import {
         BrowserRouter as Router,
         Route,
         Switch,
         Link,
} from 'react-router-dom';

import Login from './components/Login';
import Singup from './components/Singup'
import index from './components/chat/index'
import { Button } from '@material-ui/core';
const Routes = () => {
    
    return (

        <Router>
            <div>
                <Button variant='contained' color='primary'>
                    <Link to="/signup" >Back to start</Link>
                </Button>
            </div>

            <Switch>
                <Route exact path='/' component={index}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Singup}/>
            </Switch>
        </Router>
    
    )
    
    };

 
export default Routes;