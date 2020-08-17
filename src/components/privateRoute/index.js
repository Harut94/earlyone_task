import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserRegisteredSelector } from '../../reducers/user'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isUserRegistered = useSelector(isUserRegisteredSelector)

	return (
		// Show the component only when the user is registered in
		// Otherwise, redirect the user to /user-register page
		<Route {...rest} render={props => (isUserRegistered ? <Component {...props} /> : <Redirect to={'user-register'} />)} />
	);
};

export default PrivateRoute;