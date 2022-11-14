import reactIcon from 'assets/images/react-icon.svg';
import classNames from 'classnames/bind';

import styles from './Meeting.module.scss';

const cx = classNames.bind(styles);

export function Meeting() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('img')} src={reactIcon} alt="react icon" />
    </div>
  );
}
