import {Conteiner, Description, Avatar, Name, Tag, Location, Stats, Label  } from "./Profile.styled";

export const Profile = ({name, tag, location, avatar, followers, views, likes }) => {
    return <Conteiner>
        <Description>
            <Avatar
                src= {avatar}
                alt= {name}
            />
            <Name>{name}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        
        <Stats>
            <Label>
                <span>Followers</span>
                <span>{followers}</span>
            </Label>
            <Label>
                <span>Views</span>
                <span>{views}</span>
            </Label>
            <Label>
                <span>Likes</span>
                <span>{likes}</span>
            </Label>
        </Stats>
    </Conteiner>
}

