import {
  InsertRowBelowOutlined,
  LinkOutlined,
  PlusOutlined,
  VideoCameraAddOutlined,
} from '@ant-design/icons';
import { Button, Col, Divider, Input, Row, Space, Typography } from 'antd';
import MyPopover from 'app/components/MyPopover';
import IntroSlider from 'app/pages/Home/components/IntroSlider';
import classNames from 'classnames/bind';
import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import styles from './CreateMeeting.module.scss';

// eslint-disable-next-line @typescript-eslint/no-redeclare
const { Text, Title } = Typography;

const cx = classNames.bind(styles);
function CreateMeeting() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleStartNowClick = useCallback(() => {
    navigate('/meet');
  }, [navigate]);

  const popoverItems = useMemo(() => {
    return [
      {
        label: t('createMeeting.createLater'),
        icon: <LinkOutlined className={cx('item-icon', 'text-3xl')} />,
      },
      {
        label: t('createMeeting.startNow'),
        icon: <PlusOutlined className={cx('text-3xl', 'item-icon')} />,
        onClick: handleStartNowClick,
      },
    ];
  }, [t]);

  return (
    <Row className={cx('h-remaining')}>
      <Col
        span={12}
        xl={12}
        sm={24}
        className={'my-auto pl-28 pr-40 select-none'}
      >
        <Title level={1} className={cx('mt-0', 'title')}>
          {t('createMeeting.title')}
        </Title>
        <Text className={cx('text-gray', 'block', 'w-10/12', 'text-3xl')}>
          {t('createMeeting.description')}
        </Text>
        <div className="mt-24">
          <Space>
            <MyPopover
              items={popoverItems}
              open={open}
              onOpenChange={setOpen}
              itemCss={cx('text-16')}
            >
              <Button
                type="primary"
                className={cx('btn')}
                icon={<VideoCameraAddOutlined className={cx('text-2xl')} />}
              >
                {t('createMeeting.newMeeting')}
              </Button>
            </MyPopover>

            <Input
              placeholder={t('createMeeting.enterMeetingCode')}
              prefix={<InsertRowBelowOutlined />}
              className={cx('input')}
              size="large"
            />
          </Space>
        </div>
        <Divider />
        <div className="mt-10">
          <Link to={'/about'}>{t('createMeeting.learnMore')}</Link>
          {` ${t('createMeeting.aboutWeb')}`}
        </div>
      </Col>
      <Col span={12} xl={12} sm={24} className="my-auto">
        <IntroSlider />
      </Col>
    </Row>
  );
}

export default memo(CreateMeeting);
