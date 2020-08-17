import React from 'react'
import { useSelector } from 'react-redux';
import { userSelector } from '../../reducers/user'

const UserView = () => {
    const user = useSelector(userSelector)

    return (
        <div>
            <div>{user.name}</div>
            <div>{user.education}</div>
            <img src={user.imageUrl} alt={'oops'} />
        </div>
    )
}

export default UserView