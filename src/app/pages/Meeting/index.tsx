import { Row } from 'antd';
import Drawer from 'app/components/Drawer';
import BottomNavigator from 'app/containers/BottomNavigator';
import ParticipantsBox from 'app/containers/ParticipantsBox';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Meeting.module.scss';

const cx = classNames.bind(styles);

export function Meeting() {
  const [open, setOpen] = useState(true);
  return (
    <div className={cx('wrapper', 'relative', 'w-full', 'h-full')}>
      <Row className={cx('h-remaining', 'text-white')}>
        <div className="flex-grow w-remaining">
          <ParticipantsBox />
        </div>
        <Drawer onClose={() => setOpen(false)} open={open}>
          <div
            style={{
              height: '2000px',
            }}
          >
            xin chao
          </div>
        </Drawer>
      </Row>
      <BottomNavigator />
    </div>
  );
}
