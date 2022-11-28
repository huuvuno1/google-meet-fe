import { Col, Row, Tooltip } from 'antd';
import classNames from 'classnames/bind';

import styles from './Meeting.module.scss';

const cx = classNames.bind(styles);

export function Meeting() {
  return (
    <div className={cx('wrapper', 'relative', 'w-full', 'h-full')}>
      <Row className={cx('h-remaining')}>top</Row>
      <Row
        className={`absolute bottom-0 items-center left-0 right-0 text-white justify-between z-10 ${cx(
          'h-menu',
        )}`}
      >
        <Row className="pl-10">
          <div className="font-medium">
            <span>2:13 PM</span>
            <span className="mx-3">|</span>
            <span>het-woxs-tra</span>
          </div>
        </Row>
        <Row className="absolute left-0 right-0 justify-center z-0">
          <Tooltip title="Turn on microphone">
            <div className="h-16 mx-2 w-16 bg-red-500 rounded-full flex items-center justify-center">
              <i className="bx bxs-microphone-off bx-sm"></i>
            </div>
          </Tooltip>
          <Tooltip title="Turn on microphone">
            <div className="h-16 mx-2 w-16 bg-red-500 rounded-full flex items-center justify-center">
              <i className="bx bxs-camera-off"></i>
            </div>
          </Tooltip>
          <Tooltip title="Turn on microphone">
            <div className="h-16 mx-2 w-16 bg-red-500 rounded-full flex items-center justify-center">
              <i className="bx bx-captions"></i>
            </div>
          </Tooltip>
          <Tooltip title="Turn on microphone">
            <div className="h-16 mx-2 w-16 bg-red-500 rounded-full flex items-center justify-center">
              <i className="bx bxs-hand"></i>
            </div>
          </Tooltip>
          <Tooltip title="Turn on microphone">
            <div className="h-16 mx-2 w-16 bg-red-500 rounded-full flex items-center justify-center">
              <i className="bx bxs-up-arrow-square"></i>
            </div>
          </Tooltip>
          <Tooltip title="Turn on microphone">
            <div className="h-16 mx-2 w-16 bg-red-500 rounded-full flex items-center justify-center">
              <i className="bx bx-dots-vertical-rounded"></i>
            </div>
          </Tooltip>
          <Tooltip title="Turn on microphone">
            <div className="h-16 mx-2 w-16 bg-red-500 rounded-full flex items-center justify-center">
              <i className="bx bxs-phone"></i>
            </div>
          </Tooltip>
        </Row>
        <Col>right</Col>
      </Row>
    </div>
  );
}
