import React, { useEffect, useMemo, useState } from 'react';
import styles from './FriendsPage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../Home/Home';
import UserCard from '../../components/UserCard/UserCard';
import axios from 'axios';
import { baseUrl } from '../../config/api';
import toast from 'react-hot-toast';


const FriendsPage: React.FC = () => {
    const [friends, setFriends] = useState<string[]>([]);

    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state.user as User;

    const memoizedUserCard = useMemo(() => user && <UserCard user={user} />, [user]);

    useEffect(() => {
        const getFriends = async (username: string) => {
            try {
                toast.loading("Getting user details...", { id: "user" });
                const res = await axios.get(`${baseUrl}/users/friends/${username}`);
                toast.success("User Friends fetched successfully.", { id: "user" });
                setFriends(res.data);
            } catch (error) {
                toast.error("Could not load Friends", { id: "user" });
                toast.error("You have reached rate limit from github");
            }
        }

        getFriends(user.username);
    }, [user.username]);


    return (
        <div>
            <div className={styles.homebtn} onClick={() => navigate("/")}>Home</div>

            <div className={styles.usercardwrapper}>
                {memoizedUserCard}
            </div>

            <div className={styles.wrapper}>
                {friends.length == 0 ? (<>
                    <h4>No friends found</h4>
                </>) :
                    (
                        <div className={styles.friendWrapper}>
                            {
                                friends.map(frined => <div className={styles.friendCard} > {frined}  </div> )
                            }

                        </div>

                    )}

            </div>

        </div>
    )
}

export default FriendsPage;