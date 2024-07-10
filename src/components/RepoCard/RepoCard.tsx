import React from 'react'
import { Repository, User } from '../../pages/Home'
import { useNavigate } from 'react-router-dom';

interface RepoCardProps {
    repo: Repository,
    owner: User
}

const RepoCard: React.FC<RepoCardProps> = ({ owner, repo }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/repository/${owner.githubUsername}/${repo.name}` , {state : {repo, owner} ,});
    };
    
    return (
        <div className='repoCard' onClick={handleCardClick} >
            <h5 className='repoName'>{repo.name}</h5>
        </div>
    )
}

export default RepoCard