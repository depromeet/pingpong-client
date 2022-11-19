import type { PropsWithChildren } from 'react';

export interface TagProps {
  tagStyle?: string;
}

const Tag = ({ tagStyle = 'dark', children }: PropsWithChildren<TagProps>) => {
  const darkTagClass = 'text-white bg-gray-500';
  const mediumTagClass = 'text-gray-500 bg-gray-200';
  const lightTagClass = 'text-gray-500 bg-white border border-gray-200';

  const defaultTagClass = 'text-b4 px-10 py-4 rounded-full';

  const getStyleClass = () => {
    if (tagStyle === 'dark') return `${darkTagClass} ${defaultTagClass}`;
    if (tagStyle === 'medium') return `${mediumTagClass} ${defaultTagClass}`;
    if (tagStyle === 'light') return `${lightTagClass} ${defaultTagClass}`;
  };

  return (
    <div className="flex">
      <div className={`${getStyleClass()}`}>{children}</div>
    </div>
  );
};

export default Tag;
