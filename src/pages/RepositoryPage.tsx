import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Repository, User } from './Home';
import UserCard from '../components/UserCard/UserCard';

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
        <div className="homebtn" onClick={goHome}>Home</div>
        <div className='repoPageWrapper'>
            <UserCard user={user} />
            <div className="userCard">
                <div className="details">
                    <h4 className='userTitle' >{repo.name}</h4>
                    <h4 className='userUsername'>Size : {repo.size}</h4>
                    <h4 className='userUsername'>{repo.visibility}</h4>
                    <h4 className='userUsername'>issues: {repo.open_issues}</h4>
                    <h4 className='userUsername'>{repo.language}</h4>
                </div>
            </div>
        </div>
        </>
    );
};

export default RepositoryPage;
