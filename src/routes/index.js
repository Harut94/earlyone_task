import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//pages
import UserRegister from '../pages/user-register'

const RouterComponent = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/user-register" component={UserRegister} />
            <Route exact path="/user-register" component={UserRegister} />
        </Switch>
    )
}

export default RouterComponent