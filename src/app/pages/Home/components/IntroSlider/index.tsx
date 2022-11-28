import { Avatar, Carousel, Typography } from 'antd';
import classNames from 'classnames/bind';
import { useMemo } from 'react';

import styles from './IntroSlider.module.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line @typescript-eslint/no-redeclare
const { Text, Title } = Typography;

function IntroSlider() {
  const intros = useMemo(() => {
    return [
      {
        title: 'Làm nhiều đều hơn với Meet',
        description:
          'Với Google Workspace Individual, bạn có thể gọi nhóm lâu hơn, ghi lại cuộc gọi và dùng nhiều tính năng khác.',
        image:
          'https://www.gstatic.com/meet/user_individual_dont_get_cut_short_b44fc1aa61a6d001c9bf098ddc33ac52.png',
      },
      {
        title: 'Nhận đường liên kết bạn có thể chia sẻ',
        description:
          'Nhấp vào Cuộc họp mới để nhận đường liên kết mà bạn có thể gửi cho những người mình muốn họp cùng',
        image:
          'https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg',
      },
      {
        title: 'Lên kế hoạch trước',
        description:
          'Nhấp vào Cuộc họp mới để lên lịch cuộc họp trong Lịch Google và gửi lời mời cho người tham gia',
        image:
          'https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg',
      },
      {
        title: 'Cuộc họp của bạn được bảo vệ an toàn',
        description:
          'Không ai có thể tham gia cuộc họp trừ khi người tổ chức mời hoặc cho phép',
        image:
          'https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg',
      },
    ];
  }, []);
  return (
    <Carousel
      className={cx('wrapper', 'select-none', 'pb-16')}
      dots={{ className: cx('intro-slider', 'dots-wrapper') }}
    >
      {intros.map((item, index) => (
        <div className="text-center" key={index}>
          <Avatar size={320} src={item.image} />
          <Title className="w-6/12 mx-auto mt-10" level={3}>
            {item.title}
          </Title>
          <div className="w-6/12 mx-auto">
            <Text>{item.description}</Text>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default IntroSlider;
