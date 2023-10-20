import css from './Profile.module.css'

export const Profile = ({name, tag, location, avatar, followers, views, likes }) => {
    return <div className={css.profile}>
        <div className={css.description}>
            <img
                src= {avatar}
                alt= {name}
                className={css.avatar}
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        
        <ul className={css.stats}>
            <li className={css.label}>
                <span >Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li className={css.label}>
                <span >Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li className={css.label}>
                <span >Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
}

