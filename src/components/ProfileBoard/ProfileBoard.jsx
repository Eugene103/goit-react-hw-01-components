import { Profile } from "components/Profile/Profile";
import css from './ProfileBoard.module.css'

export const ProfileBoard = ({ users }) => {
    return (<div className={css.board}>{users.map(user => (<Profile key={user.username}
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />))}</div>)
}