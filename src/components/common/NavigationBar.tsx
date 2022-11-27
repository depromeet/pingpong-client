import { ProfileIcon, TalentRegisterIcon, TalentSearchIcon } from '@/components/icons';

import IconAnchor from './IconAnchor';

const NAV_LIST_INFO = [
  { icon: <TalentSearchIcon />, href: '/talent/search', text: '재능 탐색' },
  { icon: <TalentRegisterIcon />, href: '/talent/register', text: '재능 등록' },
  { icon: <ProfileIcon />, href: '/profile', text: '프로필' },
];

const NavigationBar = () => {
  return (
    <nav className="bg-primary-dark w-full h-[82px]">
      <ul className="grid grid-cols-3">
        {NAV_LIST_INFO.map(({ icon, href, text }, index) => (
          <li key={index} className="w-max justify-self-center">
            <div className="flex flex-col justify-center items-center p-8">
              <IconAnchor icon={icon} href={href} className="flex justify-center" />
              <span className="text-overline w-fit text-gray-400 pt-[3.5px]">{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
