import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Repository, User } from '../Home/Home';
import UserCard from '../../components/UserCard/UserCard';
import styles from './RepositoryPage.module.css';

const RepositoryPage: React.FC = () => {
    const location = useLocation();
    const repo = location.state?.repo as Repository;
    const user = location.state?.owner as User;

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <>
            <div className={styles.homebtn} onClick={goHome}>Home</div>
            <div className={styles.repoPageWrapper}>
                <UserCard user={user} />
                <div className={styles.card}>
                    <div >
                        <h4>{repo.name}</h4>
                        <h4 className='lightText'>Size : {repo.size}</h4>
                        <h4 className='lightText'>{repo.visibility}</h4>
                        <h4 className='lightText'>issues: {repo.open_issues}</h4>
                        <h4 className='lightText'>{repo.language}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RepositoryPage;
