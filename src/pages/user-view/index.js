import React from 'react'
import { useSelector } from 'react-redux';
import { userSelector } from '../../reducers/user'
//styles
import './index.css';

const UserView = () => {
    const user = useSelector(userSelector)

    return (
        <div className="user-registration-wrapper">
            <div className="user-reg-wrapper user-view-wrapper">
                <div>
                    <img src={user.imageUrl} alt={'oops'} width="180" />
                </div>
                <div className="user-info">
                    <div className="user-info-item">
                        <div>Name</div>
                        <div className="user-info-item-inner">{user.name}</div>
                    </div>
                    <div className="user-info-item">
                        <div>Education</div>
                        <div className="user-info-item-inner">{user.education}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserView