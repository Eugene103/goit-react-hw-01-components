import { Profile } from "components/Profile/Profile";
import { Board } from "./ProfileBoard.styled";

export const ProfileBoard = ({ users }) => {
    return (<Board>{users.map(({username, tag, location, avatar, stats}) => (<Profile key={username}
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes} />))}</Board>)
}