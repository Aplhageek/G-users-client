import React from 'react'
import { User } from '../../pages/Home';

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {


    return (
        <div >
            {
                user &&
                <div className="userCard">
                    <img
                    className="userImage"
                        src={user.profilePic}
                        alt={`user avatar`}
                        style={{ width: 50, height: 50, borderRadius: '50%' }}
                    />
                    <div className="details">
                        <h4 className='userTitle' >{user.name}</h4>
                        <h4 className='userUsername'>{user.githubUsername}</h4>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserCard