import React from 'react'
import { User } from '../../pages/Home/Home';
import styles from './UserCard.module.css';

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {


    return (
        <div >
            {
                user &&
                <div className={styles.userCard}>
                    <img
                        src={user.profilePic}
                        alt={user.name || "user"}
                        style={{ width: 50, height: 50, borderRadius: '50%' }}
                    />
                    <div >
                        <h4>{user.name}</h4>
                        <h4 className='lightText'>{user.githubUsername}</h4>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserCard