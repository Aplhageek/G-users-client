import React, { useCallback } from 'react'
import { Repository, User } from '../../pages/Home/Home'
import { useNavigate } from 'react-router-dom';
import styles from './RepoCard.module.css'

interface RepoCardProps {
    repo: Repository,
    owner: User
}

const RepoCard: React.FC<RepoCardProps> = ({ owner, repo }) => {
    const navigate = useNavigate();

    const handleCardClick = useCallback(() => {
        navigate(`/repository/${owner.githubUsername}/${repo.name}`, { state: { repo, owner } });
    }, [navigate, owner, repo]);

    return (
        <div className={styles.repoCard} onClick={handleCardClick} >
            <h5 className={styles.repoName}>{repo.name}</h5>
        </div>
    )
}

const MemoizedRepoCard = React.memo(RepoCard);
export default MemoizedRepoCard;