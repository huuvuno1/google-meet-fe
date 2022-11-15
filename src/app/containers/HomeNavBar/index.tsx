import {
  AppstoreOutlined,
  GlobalOutlined,
  LoginOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Popover, Space, Tooltip } from 'antd';
import MyPopover from 'app/components/MyPopover';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './HomeNavBar.module.scss';

const cx = classNames.bind(styles);

export function HomeNavBar() {
  const { t, i18n } = useTranslation();
  const [question, setQuestion] = useState(false);
  const [timeFormater, setTimeFormater] = useState('');
  const [isLogin] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
      setOpenPopover(false);
    },
    [i18n, setOpenPopover],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = moment().format('HH:mm · T\\h E, DD T\\hg MM');
      setTimeFormater(now);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Space className="float-right pt-3 pr-4" align="center">
      {isLogin ? (
        <>
          <span className="text-3xl block text-gray-600 mr-5">
            {timeFormater}
          </span>
          <div className={cx('wrapper-icon')}>
            <Popover
              content={<a>Close</a>}
              trigger="click"
              open={question}
              placement="bottomRight"
            >
              <Tooltip
                title={t('question')}
                placement="bottom"
                mouseEnterDelay={1}
              >
                <QuestionCircleOutlined
                  className={cx('icon-large', 'text-gray-500')}
                  onClick={() => setQuestion(!question)}
                />
              </Tooltip>
            </Popover>
          </div>
          <div className={cx('wrapper-icon')}>
            <Tooltip title={t('feedback')} placement="bottom">
              <SnippetsOutlined className={cx('icon-large', 'text-gray-500')} />
            </Tooltip>
          </div>
          <div className={cx('wrapper-icon')}>
            <Tooltip title={t('setting')} placement="bottom">
              <SettingOutlined className={cx('icon-large', 'text-gray-500')} />
            </Tooltip>
          </div>
          <Space align="center" className="ml-12">
            <div className={cx('wrapper-icon')}>
              <Tooltip title={t('appOfGgMeet')} placement="bottom">
                <AppstoreOutlined
                  className={cx(
                    'icon-large',
                    'text-gray-500',
                    'cursor-pointer',
                    'border-3',
                    'border-gray-300',
                  )}
                />
              </Tooltip>
            </div>
            <Avatar
              size={35}
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            />
          </Space>
        </>
      ) : (
        <Space>
          <MyPopover
            items={[
              {
                label: 'English',
                value: 'en',
                icon: <span className="mr-9">{'𝓮𝓷'}</span>,
                onClick: value => changeLanguage(value),
              },
              {
                label: 'Vietnamese',
                value: 'vi',
                icon: <span className="mr-9">{'𝓿𝓲'}</span>,
                onClick: value => changeLanguage(value),
              },
            ]}
            open={openPopover}
            onOpenChange={setOpenPopover}
            position="top-right"
          >
            <div className={cx('wrapper-icon')}>
              <Tooltip title={t('language')} placement="bottom">
                <GlobalOutlined className={cx('icon-large', 'text-gray-500')} />
              </Tooltip>
            </div>
          </MyPopover>
          <Link to={'/login'}>
            <Button
              icon={<LoginOutlined />}
              shape="round"
              size="large"
              className="!flex items-center"
              type="primary"
            >
              {t('loginPage.title')}
            </Button>
          </Link>
        </Space>
      )}
    </Space>
  );
}
