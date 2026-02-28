import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
    return (
        <div className="App">
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" isFollowing={false} />
            <TwitterFollowCard userName="elonmusk" name="Elon Musk" isFollowing={false} />
            <TwitterFollowCard userName="Cocotterooo" name="Manuel Medina Rodríguez" isFollowing={false} />
            <TwitterFollowCard userName="reactjs" name="React" isFollowing={false} />
        </div>
    )
}