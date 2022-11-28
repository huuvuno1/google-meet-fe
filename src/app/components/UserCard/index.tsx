import classNames from 'classnames/bind';

import styles from './UserCard.module.scss';

const cx = classNames.bind(styles);

function UserCard() {
  return <div className={cx('wrapper')}>ok</div>;
}

export default UserCard;
