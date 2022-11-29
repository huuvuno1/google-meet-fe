import { Row } from 'antd';
import Option, { Props as OptionProps } from 'app/components/Option';
import classNames from 'classnames/bind';
import { memo, useMemo, useState } from 'react';

import styles from './BottomNavigator.module.scss';

const cx = classNames.bind(styles);

function BottomNavigator() {
  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(true);
  const [caption, setCaption] = useState(false);
  const [raiseHand, setRaiseHand] = useState(false);
  const [shareScreen, setShareScreen] = useState(false);

  const centerMenu = useMemo(() => {
    return [
      {
        tooltip: 'Turn on microphone',
        activeIcon: <i className="bx bxs-microphone txt-20"></i>,
        inactiveIcon: <i className="bx bxs-microphone-off txt-20"></i>,
        active: mic,
        activeClass: 'bg-zinc-700 hover:bg-zinc-600',
        onClick: () => setMic(prev => !prev),
        inactiveClass: 'bg-red-500',
      },
      {
        tooltip: 'Turn on camera',
        activeIcon: <i className="bx bx-camera txt-22"></i>,
        inactiveIcon: <i className="bx bx-camera-off txt-22"></i>,
        active: camera,
        activeClass: 'bg-zinc-700 hover:bg-zinc-600',
        onClick: () => setCamera(!camera),
        inactiveClass: 'bg-red-500',
      },
      {
        tooltip: 'Turn on captions',
        activeIcon: <i className="bx bxs-captions txt-22 text-black"></i>,
        inactiveIcon: <i className="bx bx-captions txt-22"></i>,
        active: caption,
        activeClass: 'bg-blue-400 hover:bg-blue-300',
        onClick: () => setCaption(!caption),
        inactiveClass: 'bg-zinc-700',
      },
      {
        tooltip: 'Raise hand',
        activeIcon: <i className="bx bxs-hand txt-24 text-black"></i>,
        inactiveIcon: <i className="bx bxs-hand txt-24"></i>,
        active: raiseHand,
        activeClass: 'bg-blue-400 hover:bg-blue-300',
        onClick: () => setRaiseHand(!raiseHand),
        inactiveClass: 'bg-zinc-700',
      },
      {
        tooltip: 'Present now',
        activeIcon: (
          <i className="bx bxs-up-arrow-square txt-24 text-black"></i>
        ),
        inactiveIcon: <i className="bx bxs-up-arrow-square txt-24"></i>,
        active: shareScreen,
        activeClass: 'bg-blue-400 hover:bg-blue-300',
        onClick: () => setShareScreen(!shareScreen),
        inactiveClass: 'bg-zinc-700',
      },
      {
        tooltip: 'More options',
        active: true,
        activeIcon: <i className="bx bx-dots-vertical-rounded txt-24"></i>,
        activeClass: 'bg-zinc-700 hover:bg-zinc-600',
      },
      {
        tooltip: 'Leave call',
        inactiveIcon: <i className="bx bxs-phone txt-26 rotate-135"></i>,
        active: false,
        inactiveClass: 'bg-red-500',
        className: '!w-24',
      },
    ];
  }, [
    mic,
    camera,
    caption,
    raiseHand,
    shareScreen,
    setMic,
    setCamera,
    setCaption,
    setRaiseHand,
    setShareScreen,
  ]);

  const rightMenu: OptionProps[] = useMemo(() => {
    return [
      {
        tooltip: 'More options',
        active: true,
        badge: 2,
        activeIcon: <i className="bx bxs-user-account txt-28"></i>,
      },
    ];
  }, []);

  return (
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
        {centerMenu.map((item, index) => (
          <Option
            key={index}
            active={item?.active}
            activeIcon={item?.activeIcon}
            inactiveIcon={item?.inactiveIcon}
            activeClass={item?.activeClass}
            inactiveClass={item?.inactiveClass}
            className={item?.className}
            onClick={item?.onClick}
            tooltip={item?.tooltip}
          />
        ))}
      </Row>
      <Row className="pr-10">
        {rightMenu.map((item, index) => (
          <Option
            key={index}
            active={item?.active}
            activeIcon={item?.activeIcon}
            inactiveIcon={item?.inactiveIcon}
            activeClass={item?.activeClass}
            inactiveClass={item?.inactiveClass}
            className={item?.className}
            onClick={item?.onClick}
            badge={item?.badge}
            tooltip={item?.tooltip}
          />
        ))}
      </Row>
    </Row>
  );
}

export default memo(BottomNavigator);
