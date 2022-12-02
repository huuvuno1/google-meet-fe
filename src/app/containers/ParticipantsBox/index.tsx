import ParticipantCard from 'app/components/ParticipantCard';
import classNames from 'classnames/bind';
import { memo, useMemo } from 'react';

import styles from './ParticipantsBox.module.scss';

const cx = classNames.bind(styles);

function ParticipantsBox() {
  const participants = useMemo(
    () => [
      {
        id: 1,
        name: 'Nguyen Van A',
        isHost: true,
        isMuted: true,
        isVideoOn: false,
        isHandRaised: false,
        isPin: false,
        avatar:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
      },
      {
        id: 2,
        name: 'Nguyen Van A',
        isHost: true,
        isMuted: false,
        isVideoOn: false,
        isHandRaised: false,
        isPin: false,
        avatar:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
      },
      {
        id: 3,
        name: 'Nguyen Van A',
        isHost: true,
        isMuted: false,
        isVideoOn: false,
        isHandRaised: false,
        isPin: false,
        avatar:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
      },
      {
        id: 4,
        name: 'Nguyen Van A',
        isHost: true,
        isMuted: false,
        isVideoOn: false,
        isHandRaised: false,
        isPin: false,
        avatar:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
      },
      // {
      //   id: 5,
      //   name: 'Nguyen Van A',
      //   isHost: true,
      //   isMuted: false,
      //   isVideoOn: false,
      //   isHandRaised: false,
      //   isPin: false,
      //   avatar:
      //     'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
      // },
      // {
      //   id: 6,
      //   name: 'Nguyen Van A',
      //   isHost: true,
      //   isMuted: false,
      //   isVideoOn: false,
      //   isHandRaised: false,
      //   isPin: false,
      //   avatar:
      //     'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
      // },
      {
        id: 7,
        name: 'Nguyen Van A',
        isHost: true,
        isMuted: false,
        isVideoOn: false,
        isHandRaised: false,
        isPin: false,
        avatar:
          'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/avatar-the-way-of-water-poster.jpg',
      },
    ],
    [],
  );

  const pinParticipant = useMemo(
    () => participants.find(p => p.isPin) || participants[0],
    [participants],
  );

  const otherParticipants = useMemo(() => {
    if (pinParticipant) {
      const other = participants.filter(p => !p.isPin);
      if (other.length > 4) {
        const formatted = other.slice(0, 3);
        formatted.push({
          id: -1,
          name: `${other.length - 4} others`,
          isHost: false,
          isMuted: false,
          isVideoOn: false,
          isHandRaised: false,
          isPin: false,
          avatar: other[4].avatar,
        });
        return formatted;
      }
      return other.length > 0 ? other : participants;
    } else {
      const formatted = participants.slice(0, 8);
      if (participants.length > 8) {
        formatted.push({
          id: -1,
          name: `${participants.length - 8} others`,
          isHost: false,
          isMuted: false,
          isVideoOn: false,
          isHandRaised: false,
          isPin: false,
          avatar: participants[8].avatar,
        });
      }
      return formatted;
    }
  }, [participants]);

  return (
    <div className={`${cx('wrapper')} h-full relative flex`}>
      {pinParticipant ? (
        <>
          <div
            className={`${cx('pinParticipant')} h-full
        ${otherParticipants?.length >= 2 ? 'w-10/12' : 'flex-grow'}`}
          >
            <ParticipantCard {...pinParticipant} />
          </div>
          <div
            className={`${cx(
              'otherParticipants',
              otherParticipants.length === 1
                ? 'absolute w-96 h-56 bottom-0 right-0'
                : 'flex-grow flex flex-col',
            )} h-full`}
          >
            {otherParticipants.map(participant => (
              <ParticipantCard
                key={participant.id}
                name={participant.name}
                isHandRaised={participant.isHandRaised}
                isMuted={participant.isMuted}
                isVideoOn={participant.isVideoOn}
                avatar={participant.avatar}
                className={otherParticipants.length >= 2 ? `!h-56 !w-96` : ''}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {otherParticipants.map(participant => (
            <ParticipantCard
              key={participant.id}
              name={participant.name}
              isHandRaised={participant.isHandRaised}
              isMuted={participant.isMuted}
              isVideoOn={participant.isVideoOn}
              avatar={participant.avatar}
              className={otherParticipants.length >= 2 ? `!h-56 !w-96` : ''}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default memo(ParticipantsBox);
