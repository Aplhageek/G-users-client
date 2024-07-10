import React, { useState, useEffect, ReactNode } from 'react';
import Input from '../components/Input/Input';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchUserAPI } from '../config/api';
import UserCard from '../components/UserCard/UserCard';
import RepoCard from '../components/RepoCard/RepoCard';

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
    const [user, setUser] = useState<User | null>(null);
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const fetchUser = async (username: string) => {
        try {
            const data = await fetchUserAPI(username);
            setUser(data.user);
            toast.success("User details fetched successfully.");
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    useEffect(() => {
        const fetchRepositories = async () => {
            if (user) {
                try {
                    const response = await axios.get(`https://api.github.com/users/${user.githubUsername}/repos`);
                    console.log(response.data);
                    setRepositories(response.data);
                } catch (error) {
                    console.error('Error fetching repositories:', error);
                }
            }
        };

        fetchRepositories();
    }, [user]);

    return (
        <>
            <Input fetchUser={fetchUser} />
            {user && repositories && (
                <div  className='home'>
                    <UserCard user={user} />
                    <ul className='repoWrapper'>
                        {repositories.map(repo => (
                            <RepoCard owner={user} key={repo.id} repo={repo} />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default HomePage;
