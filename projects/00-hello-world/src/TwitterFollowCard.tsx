import { useState } from 'react'
import './index.css'

export function TwitterFollowCard({ userName, name, initialIsFollowing }: { userName: string, name: string, initialIsFollowing: boolean }) {

    const [isFollowingState, setIsFollowingState] = useState(initialIsFollowing)

    const text = isFollowingState ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowingState 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowingState(!isFollowingState)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt={`Avatar of ${name}, a content creator, with username @${userName} displayed below`} src={`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-name'>{name}</strong>
                    <span className='tw-followCard-username'>@{userName}</span>
                </div>
            </header>
            <aside className='tw-followCard-aside'>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-button-text">{text}</span>
                    <span className="tw-followCard-button-label">Dejar de Seguir</span>
                </button>
                
            </aside>
        </article>
    )
}