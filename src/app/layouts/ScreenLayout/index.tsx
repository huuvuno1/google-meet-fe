import classNames from 'classnames/bind';

import styles from './ScreenLayout.module.scss';

interface Props {
  children: JSX.Element;
}
const cx = classNames.bind(styles);

function ScreenLayout({ children }: Props) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default ScreenLayout;
