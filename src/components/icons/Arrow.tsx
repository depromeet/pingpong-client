import React from 'react';

type Props = {
  color?: 'white' | 'gray' | 'black';
  direction?: 'left' | 'right';
  width?: number;
  height?: number;
  className?: string;
};

const Arrow = ({ color = 'black', direction = 'left', height, width, className }: Props) => {
  const getColor = () => {
    switch (color) {
      case 'black':
        return '#111111';
      case 'white':
        return '#ffffff';
      case 'gray':
        return '#a0a0a0';
    }
  };

  return (
    <div style={direction === 'left' ? { transform: 'scaleX(-1)' } : {}} className={className}>
      <svg
        width={width ?? 11}
        height={height ?? 20}
        viewBox={`0 0 11 20`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1667 0.833328L1 9.99999L10.1667 19.1667"
          stroke={getColor()}
          stroke-width="1.6"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Arrow;
