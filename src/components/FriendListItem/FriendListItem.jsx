import s from '../FriendListItem/FriendListItem.module.css';
import propTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${
          isOnline ? s.statusOnline : s.statusOffline
        }`}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};

export default FriendListItem;
