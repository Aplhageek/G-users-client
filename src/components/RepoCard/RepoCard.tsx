import React from 'react'
import { Repository } from '../../pages/Home'

interface RepoCardProps{
    repo : Repository
}

const RepoCard : React.FC<RepoCardProps> = ({repo}) => {
  return (
    <div className='repoCard'>
        <h5 className='repoName'>{repo.name}</h5>
    </div>
  )
}

export default RepoCard