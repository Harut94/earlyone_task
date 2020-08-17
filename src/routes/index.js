import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//pages
import UserRegister from '../pages/user-register'
import UserView from '../pages/user-view'
import NoMatch from '../pages/no-match'
//components
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import PrivateRoute from '../components/privateRoute'

const RouterComponent = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Redirect exact from="/" to="/user-register" component={UserRegister} />
                <Route exact path="/user-register" component={UserRegister} />
                <PrivateRoute path="/user-view" component={UserView} />
                <Route exact path="*" component={NoMatch} />
            </Switch>
            <Footer />
        </div>
    )
}

export default RouterComponent