import { uniqueId } from '@/lib/utils';

interface HeaderTitleProps {
  texts: string[];
  textClassName?: string;
  className?: string;
}

const HeaderTitle = ({ texts, textClassName, className }: HeaderTitleProps) => {
  return (
    <h1 className={`text-h2 ${className}`}>
      {texts.map((text) => {
        const uniqueKey = uniqueId('key');
        return (
          <span key={uniqueKey} className={`block ${textClassName}`}>
            {text}
          </span>
        );
      })}
    </h1>
  );
};

export default HeaderTitle;
