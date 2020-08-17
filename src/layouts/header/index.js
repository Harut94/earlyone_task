import React from 'react';
import { NavLink } from 'react-router-dom';
//styles
import './index.css';
//
import { useSelector } from 'react-redux';
//
import { isUserRegisteredSelector } from '../../reducers/user'

const Header = () => {
    const isUserRegistered = useSelector(isUserRegisteredSelector)

    return (
        <div className={'header'}>
            <NavLink className="navLink" activeClassName="activeNavLink" to={'/user-register'}>
                User Registration
			</NavLink>
            {isUserRegistered ? <NavLink className="navLink" activeClassName="activeNavLink" to={'/user-view'}>
                User View
			</NavLink> : null}
        </div>
    )
}

export default Header