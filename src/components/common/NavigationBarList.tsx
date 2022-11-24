import IconAnchor from './IconAnchor';
import type { NavigationBarListItemProps } from './NavigationBar';

interface NavigationBarListProps {
  items: NavigationBarListItemProps;
}

const NavigationBarList = ({ items }: NavigationBarListProps) => {
  return (
    <>
      {items.map(({ icon, href, uuid, text }) => {
        return (
          <li key={uuid} className="w-max">
            <label className="flex-col justify-center align-middle">
              <IconAnchor icon={icon} href={href} className="flex justify-center align-middle h-[25px]" />
              <span className="text-overline w-max">{text}</span>
            </label>
          </li>
        );
      })}
    </>
  );
};

export default NavigationBarList;
