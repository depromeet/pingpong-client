import { ProfileIcon, TalentRegisterIcon, TalentSearchIcon } from 'src/components/common/icons';

import NavigationBarList from './NavigationBarList';

const NAV_LIST_INFO = [
  { icon: <TalentSearchIcon />, href: '/talent/search', uuid: '1', text: '재능 탐색' },
  { icon: <TalentRegisterIcon />, href: '/talent/register', uuid: '2', text: '재능 등록' },
  { icon: <ProfileIcon />, href: '/profile', uuid: '3', text: '프로필' },
];

export type NavigationBarListItemProps = typeof NAV_LIST_INFO;

const NavigationBar = () => {
  return (
    <nav className="w-[375px]">
      <ul className="flex w-full justify-evenly">
        <NavigationBarList items={NAV_LIST_INFO} />
      </ul>
    </nav>
  );
};

export default NavigationBar;
