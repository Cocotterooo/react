import { TwitterFollowCard } from "./TwitterFollowCard"
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        initialIsFollowing: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        initialIsFollowing: false
    },
    {
        userName: 'm_medina33',
        name: 'Manuel Medina Rodríguez',
        initialIsFollowing: true
    },
    {
        userName: 'reactjs',
        name: 'React',
        initialIsFollowing: false
    }
]

export function App() {
    return (
        <div className="App">
            {users.map(user => (
                <TwitterFollowCard
                    key={user.userName}
                    userName={user.userName}
                    name={user.name}
                    initialIsFollowing={user.initialIsFollowing}
                />
            ))}
        </div>
    )
}