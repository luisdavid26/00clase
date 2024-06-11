import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const users = [
  {
    userName: 'midudev',
    name: 'miguel duran',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'pablo',
    isFollowing: true
  }, {
    userName: 'TMChein',
    name: 'robet',
    isFollowing: false
  }
]
export function App() {
  return (
    <section className='App'>
    {
      users.map(({ userName, name,isFollowing}) => (
          <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
      ))
    }
    </section>
  )
}
