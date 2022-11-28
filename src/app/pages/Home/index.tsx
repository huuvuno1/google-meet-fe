import { Col, Row, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import { CreateMeeting } from 'app/containers/CreateMeeting';
import { HomeNavBar } from 'app/containers/HomeNavBar';
import LogoFull from 'assets/images/logo-full.png';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../Login';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

export function Home() {
  return (
    <div className={'p-3'}>
      <Row className="select-none">
        <Col span={12} className="pl-5 pt-2">
          <Link to={'/'}>
            <Space align="center" className="cursor-pointer">
              <img src={LogoFull} />
              <Title
                level={3}
                className={cx('text-gray-500', 'font-normal', '!m-0')}
              >
                Meet
              </Title>
            </Space>
          </Link>
        </Col>
        <Col span={12}>
          <HomeNavBar />
        </Col>
      </Row>

      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<CreateMeeting />}></Route>
      </Routes>
    </div>
  );
}
