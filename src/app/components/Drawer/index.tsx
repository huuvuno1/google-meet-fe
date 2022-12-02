import { Tooltip } from 'antd';
import classNames from 'classnames/bind';

import styles from './Drawer.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  className?: string;
  title?: string;
}

function Drawer(props: Props) {
  const { children, open = true, onClose, className, title } = props;
  return (
    <div
      className={`${cx(
        'wrapper',
        open ? 'slidein' : 'slideout',
      )} text-black flex flex-col ${className}`}
    >
      <div className="flex items-center justify-between py-3 px-3 select-none">
        <h1 className="m-0 ml-5 text-3xl font-normal">{title}</h1>
        <Tooltip title="Close">
          <div
            onClick={onClose}
            className={`h-11 w-11 flex items-center justify-center hover:bg-gray-100 
          rounded-full cursor-pointer p-4 box-content text-gray-500 ${cx(
            'close-icon',
          )}`}
          >
            &#10005;
          </div>
        </Tooltip>
      </div>
      <div className={cx('wrapper-content', 'flex-grow')}>{children}</div>
    </div>
  );
}

export default Drawer;
