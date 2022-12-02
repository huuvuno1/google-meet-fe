import { Row } from 'antd';
import Option, { Props as OptionProps } from 'app/components/Option';
import classNames from 'classnames/bind';
import { memo, useCallback, useMemo, useState } from 'react';

import styles from './BottomNavigator.module.scss';

const cx = classNames.bind(styles);

function BottomNavigator() {
  const [centerMenuState, setCenterMenuState] = useState({
    mic: true,
    camera: true,
    caption: false,
    raiseHand: false,
    shareScreen: false,
  });

  const [rightMenuState, setRightMenuState] = useState({
    info: false,
    chat: false,
    participants: false,
    activities: false,
    settings: false,
  });

  const toggleCenterMenuState = useCallback(
    (key: string) => {
      setCenterMenuState(prevState => ({
        ...prevState,
        [key]: !prevState[key as keyof typeof prevState],
      }));
    },
    [setCenterMenuState],
  );

  const toggleRightMenuState = useCallback(
    (key: string) => {
      setRightMenuState(prevState => ({
        ...prevState,
        [key]: !prevState[key as keyof typeof prevState],
      }));
    },
    [setRightMenuState],
  );

  const centerMenuItems = useMemo(() => {
    return [
      {
        tooltip: 'Turn on microphone',
        activeIcon: <i className="bx bxs-microphone txt-20"></i>,
        inactiveIcon: <i className="bx bxs-microphone-off txt-20"></i>,
        active: centerMenuState.mic,
        activeClass: 'bg-zinc-700 hover:bg-zinc-600',
        onClick: () => toggleCenterMenuState('mic'),
        inactiveClass: 'bg-red-500',
      },
      {
        tooltip: 'Turn on camera',
        activeIcon: <i className="bx bx-camera txt-22"></i>,
        inactiveIcon: <i className="bx bx-camera-off txt-22"></i>,
        active: centerMenuState.camera,
        activeClass: 'bg-zinc-700 hover:bg-zinc-600',
        onClick: () => toggleCenterMenuState('camera'),
        inactiveClass: 'bg-red-500',
      },
      {
        tooltip: 'Turn on captions',
        activeIcon: <i className="bx bxs-captions txt-22 text-black"></i>,
        inactiveIcon: <i className="bx bx-captions txt-22"></i>,
        active: centerMenuState.caption,
        activeClass: 'bg-blue-400 hover:bg-blue-300',
        onClick: () => toggleCenterMenuState('caption'),
        inactiveClass: 'bg-zinc-700',
      },
      {
        tooltip: 'Raise hand',
        activeIcon: <i className="bx bxs-hand txt-24 text-black"></i>,
        inactiveIcon: <i className="bx bxs-hand txt-24"></i>,
        active: centerMenuState.raiseHand,
        activeClass: 'bg-blue-400 hover:bg-blue-300',
        onClick: () => toggleCenterMenuState('raiseHand'),
        inactiveClass: 'bg-zinc-700',
      },
      {
        tooltip: 'Present now',
        activeIcon: (
          <i className="bx bxs-up-arrow-square txt-24 text-black"></i>
        ),
        inactiveIcon: <i className="bx bxs-up-arrow-square txt-24"></i>,
        active: centerMenuState.shareScreen,
        activeClass: 'bg-blue-400 hover:bg-blue-300',
        onClick: () => toggleCenterMenuState('shareScreen'),
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
  }, [centerMenuState, toggleCenterMenuState]);

  const rightMenuItems: OptionProps[] = useMemo(() => {
    return [
      {
        tooltip: 'Present now',
        activeIcon: <i className="bx bxs-info-circle txt-26"></i>,
        inactiveIcon: <i className="bx bx-info-circle txt-26"></i>,
        active: rightMenuState.info,
        onClick: () => toggleRightMenuState('info'),
      },
      {
        tooltip: 'More options',
        active: rightMenuState.participants,
        badge: 2,
        inactiveIcon: <i className="bx bx-group txt-26"></i>,
        activeIcon: <i className="bx bxs-group txt-26"></i>,
        onClick: () => toggleRightMenuState('participants'),
      },
      {
        tooltip: 'Present now',
        activeIcon: <i className="bx bxs-chat txt-26"></i>,
        inactiveIcon: <i className="bx bx-chat txt-26"></i>,
        active: rightMenuState.chat,
        onClick: () => toggleRightMenuState('chat'),
      },
      {
        tooltip: 'Present now',
        activeIcon: <i className="bx bxs-category-alt txt-26"></i>,
        inactiveIcon: <i className="bx bx-category-alt txt-26"></i>,
        active: rightMenuState.activities,
        onClick: () => toggleRightMenuState('activities'),
      },
      {
        tooltip: 'Present now',
        activeIcon: <i className="bx bxs-lock-open txt-26"></i>,
        inactiveIcon: <i className="bx bx-lock-open txt-26"></i>,
        active: rightMenuState.settings,
        onClick: () => toggleRightMenuState('settings'),
      },
    ] as OptionProps[];
  }, [rightMenuState, toggleRightMenuState]);

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
        {centerMenuItems.map((item, index) => (
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
        {rightMenuItems.map((item, index) => (
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
