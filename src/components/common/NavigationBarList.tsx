import { ProfileIcon, TalentRegisterIcon, TalentSearchIcon } from 'src/components/common/icons';

import IconAnchor from './IconAnchor';

const NAV_LIST_INFO = [
  { icon: <TalentSearchIcon />, href: '/talent/search', uuid: '1', text: '재능 탐색' },
  { icon: <TalentRegisterIcon />, href: '/talent/register', uuid: '2', text: '재능 등록' },
  { icon: <ProfileIcon />, href: '/profile', uuid: '3', text: '프로필' },
];

const NavigationBarList = () => {
  return (
    <>
      {NAV_LIST_INFO.map(({ icon, href, uuid, text }) => {
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
