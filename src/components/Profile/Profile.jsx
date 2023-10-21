import {Board, Conteiner, Description, Avatar, Name, Tag, Location, Stats, Label  } from "./Profile.styled";

export const Profile = ({users}) => {
    return <Board><Conteiner>
        <Description>
            <Avatar
                src= {users.avatar}
                alt= {users.name}
            />
            <Name>{users.name}</Name>
            <Tag>@{users.tag}</Tag>
            <Location>{users.location}</Location>
        </Description>
        
        <Stats>
            <Label>
                <span>Followers</span>
                <span>{users.stats.followers}</span>
            </Label>
            <Label>
                <span>Views</span>
                <span>{users.stats.views}</span>
            </Label>
            <Label>
                <span>Likes</span>
                <span>{users.stats.likes}</span>
            </Label>
        </Stats>
    </Conteiner>
        </Board>
}



