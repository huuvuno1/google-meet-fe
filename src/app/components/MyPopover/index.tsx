import { Popover } from 'antd';
import classNames from 'classnames/bind';
import React, { memo, useMemo } from 'react';

import styles from './MyPopover.module.scss';

const cx = classNames.bind(styles);

interface Item {
  label: string;
  value?: any;
  icon?: React.ReactNode;
  onClick?: (value: any, index?: Number) => void;
}

interface Props {
  items: Item[];
  popoverCss?: string;
  itemCss?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  position?: 'top-left' | 'bottom-left' | 'bottom-right' | 'top-right';
}

function MyPopover(props: Props) {
  const {
    items,
    popoverCss,
    itemCss,
    children,
    open = true,
    onOpenChange,
    position = 'top-left',
  } = props;
  const points = useMemo(() => {
    switch (position) {
      case 'top-left':
        return ['t', 't'];
      case 'bottom-left':
        return ['b', 'b'];
      case 'bottom-right':
        return ['b', 'b'];
      case 'top-right':
        return ['t', 't'];
      default:
        return ['t', 't'];
    }
  }, [position]);
  return (
    <Popover
      content={
        <div
          className={`
          ${cx('select-none', 'pt-5', 'pb-5', 'font-medium', 'text-16')} 
          ${popoverCss}`}
        >
          {items.map((item, index) => (
            <div
              className={`flex items-center hover:bg-gray-100 p-6 cursor-pointer ${itemCss}`}
              key={index}
              onClick={() => item.onClick && item.onClick(item.value, index)}
            >
              {item.icon}
              <div className={cx('menu-item')}>{item.label}</div>
            </div>
          ))}
        </div>
      }
      showArrow={false}
      placement="top"
      open={open}
      align={{
        points,
      }}
      trigger="click"
      onOpenChange={onOpenChange}
    >
      {children}
    </Popover>
  );
}

export default memo(MyPopover);
