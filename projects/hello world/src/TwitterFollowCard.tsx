import './index.css'

export function TwitterFollowCard({ userName, name, isFollowing }: { userName: string, name: string, isFollowing: boolean }) {
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
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}