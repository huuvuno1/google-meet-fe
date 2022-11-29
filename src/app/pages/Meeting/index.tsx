import { Row } from 'antd';
import BottomNavigator from 'app/containers/BottomNavigator';
import classNames from 'classnames/bind';

import styles from './Meeting.module.scss';

const cx = classNames.bind(styles);

export function Meeting() {
  return (
    <div className={cx('wrapper', 'relative', 'w-full', 'h-full')}>
      <Row className={cx('h-remaining')}>top</Row>
      <BottomNavigator />
    </div>
  );
}
