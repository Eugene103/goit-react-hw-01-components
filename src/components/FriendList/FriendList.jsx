import { Status, Item, List, Avatar, Name } from "./FriendList.styled";
import { MdOutlineOnlinePrediction } from "react-icons/md";

export const FriendList = ({friends}) => {
    return (<List className="friend-list">{friends.map(({ avatar, id, isOnline, name }) => (
        <Item key={id}>
        <Status online={isOnline}><MdOutlineOnlinePrediction size='25px'></MdOutlineOnlinePrediction></Status>
        <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
</Item>))}</List>)
}