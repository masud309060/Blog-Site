import React from 'react';
import { MyContext } from '../../App';
import './ProfileInfo.css';

const ProfileInfo = () => {
    const { userInfo } = React.useContext(MyContext);
    const [user] = userInfo;
    return (
        <div className="profileInfo container">
            <div className="profile_photo">{user.name.slice(0, 1)}</div>
            <div>
                <strong>{user.name}</strong> <br />
                <small>{user.email}</small>
            </div>
        </div>
    );
};

export default ProfileInfo;
