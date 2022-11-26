const Check = ({ color }: { color: 'gray' | 'black' | 'white' }) => {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.16675 5.00098L5.05564 8.88987L12.8334 1.11209"
        stroke={color === 'gray' ? '#CBCBCB' : color === 'white' ? '#ffffff' : '#474747'}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
