import React, { useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import Input from '../../components/Input/Input';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchUserAPI } from '../../config/api';
import UserCard from '../../components/UserCard/UserCard';
import RepoCard from '../../components/RepoCard/RepoCard';
import styles from './Home.module.css';

export interface User {
    id: number;
    username: string;
    githubUsername: string;
    name: string | null;
    bio: string | null;
    location: string | null;
    blog: string;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    profilePic: string,
}

export interface Repository {
    visibility: ReactNode;
    size: string;
    open_issues: string;
    language: string;
    id: number;
    name: string;
    description: string;
    // Add more fields as needed
}

const HomePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(getUserFromLocalStorage);
    const [repositories, setRepositories] = useState<Repository[]>(getRepoFromLocalStorage);

    function getUserFromLocalStorage() {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    }
    function getRepoFromLocalStorage() {
        const repo = localStorage.getItem('repo');
        return repo ? JSON.parse(repo) : [];
    }

    const fetchUser = useCallback(async (username: string) => {
        try {
            toast.loading("Getting user details...", { id: "user" });
            const data = await fetchUserAPI(username);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            await fetchRepositories(data.user);
            toast.success("User details fetched successfully.", { id: "user" });
        } catch (error) {
            toast.error("Could not load user", { id: "user" });
        }
    }, []);

    const fetchRepositories = useCallback(async (user: User) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${user.githubUsername}/repos`);
            localStorage.setItem('repo', JSON.stringify(response.data));
            setRepositories(response.data);
        } catch (error) {
            // Handle error
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);



    const memoizedUserCard = useMemo(() => user && <UserCard user={user} />, [user]);
    const memoizedRepoCards = useMemo(() => repositories.map(repo => (
        <RepoCard owner={user!} key={repo.id} repo={repo} />
    )), [repositories, user]);


    return (
        <>
            <Input fetchUser={fetchUser} />
            {user && repositories && (
                <div className={styles.home}>
                    {memoizedUserCard}
                    <ul className={styles.repoWrapper}>
                        {memoizedRepoCards}
                    </ul>
                </div>
            )}
        </>
    );
};


const MemoizedUHomePage = React.memo(HomePage);
export default MemoizedUHomePage;