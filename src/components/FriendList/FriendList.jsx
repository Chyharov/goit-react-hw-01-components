import propTypes from 'prop-types';
import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends}) => {   
    return (
        <ul className={s.friendList}>
            {friends.map((el)=> (
                <FriendListItem key={el.id} {...el}/>
            ))}
        </ul>
        );
};

FriendList.propTypes = {
    friends: propTypes.array,     
};


export default FriendList;