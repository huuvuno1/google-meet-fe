import classNames from 'classnames/bind';
import { Stream } from 'stream';

import styles from './ParticipantCard.module.scss';

const cx = classNames.bind(styles);

interface Props {
  name: string;
  isHost?: boolean;
  isMuted?: boolean;
  isSpeaking?: boolean;
  isVideoOn?: boolean;
  isHandRaised?: boolean;
  isSelf?: boolean;
  isScreenSharing?: boolean;
  isPin?: boolean;
  avatar?: string;
  video?: Stream;
  className?: string;
}

function ParticipantCard(props: Props) {
  const { isHost, name, isHandRaised, isMuted, isVideoOn, avatar, className } =
    props;
  return (
    <div
      className={`${cx('wrapper')}
    text-white h-full participant-card
    ${className}`}
    >
      <div
        className={`border-2 border-blue-600 h-full
        relative rounded-xl flex items-center justify-center overflow-hidden`}
      >
        {/* name & hand raise */}
        <div
          className={`flex items-center absolute bottom-3 left-6 font-medium ${
            isHandRaised && 'bg-white rounded-full text-black text-xl py-2 px-4'
          }`}
        >
          {isHandRaised && <i className="bx bxs-hand mr-3"></i>}
          <span>{isHost ? 'You' : name}</span>
        </div>

        {/* mic status */}
        <div className="absolute top-5 right-6">
          {isMuted ? (
            <i className="bx bxs-microphone-off txt-18"></i>
          ) : (
            <div className="h-11 w-11 bg-blue-600 flex items-center justify-center rounded-full txt-20">
              <i className="bx bx-equalizer"></i>
            </div>
          )}
        </div>

        {isVideoOn ? (
          <div>
            <video autoPlay muted controls />
          </div>
        ) : (
          <div
            className={`${cx(
              'avatar',
            )} rounded-full overflow-hidden participant-card-wrap-img`}
          >
            <img className="h-64 w-64 object-cover" src={avatar} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ParticipantCard;
