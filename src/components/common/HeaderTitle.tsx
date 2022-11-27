import { uniqueId } from '@/lib/utils';

interface HeaderTitleProps {
  texts: string[];
}

const HeaderTitle = ({ texts }: HeaderTitleProps) => {
  return (
    <h1 className="text-h2">
      {texts.map((text) => {
        const uniqueKey = uniqueId('key');
        return (
          <span key={uniqueKey} className="block">
            {text}
          </span>
        );
      })}
    </h1>
  );
};

export default HeaderTitle;
