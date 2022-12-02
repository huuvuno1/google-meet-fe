import { Badge, Tooltip } from 'antd';
import { memo } from 'react';

export interface Props {
  tooltip?: string;
  badge?: number;
  maxBadge?: number;
  activeIcon?: React.ReactElement;
  inactiveIcon?: React.ReactElement;
  activeClass?: string;
  inactiveClass?: string;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

function Option(props: Props) {
  const {
    tooltip,
    badge,
    maxBadge,
    active = true,
    activeIcon,
    inactiveIcon,
    activeClass,
    inactiveClass,
    onClick,
    className,
  } = props;

  return (
    <Tooltip title={tooltip}>
      <Badge
        count={badge}
        overflowCount={maxBadge}
        offset={[-10, 0]}
        color="gray"
        className="option-custom"
      >
        <div
          className={`h-16 cursor-pointer mx-3 w-16 rounded-full flex items-center justify-center text-white 
          ${className} ${active ? activeClass : inactiveClass}`}
          onClick={onClick}
        >
          {active ? activeIcon : inactiveIcon}
        </div>
      </Badge>
    </Tooltip>
  );
}

export default memo(Option);
