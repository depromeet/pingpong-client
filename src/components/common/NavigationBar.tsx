import { ProfileIcon, TalentRegisterIcon, TalentSearchIcon } from '@/components/icons';

import IconAnchor from './IconAnchor';

const NAV_LIST_INFO = [
  { icon: <TalentSearchIcon />, href: '/talent/search', text: '재능 탐색' },
  { icon: <TalentRegisterIcon />, href: '/talent/register', text: '재능 등록' },
  { icon: <ProfileIcon />, href: '/profile', text: '프로필' },
];

const NavigationBar = () => {
  return (
    <nav className="w-[375px]">
      <ul className="flex w-full justify-evenly">
        {NAV_LIST_INFO.map(({ icon, href, text }, index) => (
          <li key={index} className="w-max">
            <label className="flex-col justify-center align-middle">
              <IconAnchor icon={icon} href={href} className="flex justify-center align-middle h-[25px]" />
              <span className="text-overline w-max">{text}</span>
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
