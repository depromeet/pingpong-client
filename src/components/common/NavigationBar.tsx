import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ProfileIcon, TalentRegisterIcon, TalentSearchIcon } from '@/components/icons';

import IconAnchor from './IconAnchor';

interface NavigationBarProps {
  className?: string;
}

const NAV_LIST_INFO = [
  { icon: <TalentSearchIcon />, selectedIcon: <TalentSearchIcon color="#4D77FF" />, href: '/main/', text: '재능 탐색' },
  {
    icon: <TalentRegisterIcon />,
    selectedIcon: <TalentRegisterIcon color="#4D77FF" />,
    href: '/talent/register/',
    text: '재능 등록',
  },
  { icon: <ProfileIcon />, selectedIcon: <ProfileIcon color="#4D77FF" />, href: '/profile/', text: '프로필' },
];

const NavigationBar = ({ className }: NavigationBarProps) => {
  const [selectedPath, setSelectedPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    setSelectedPath(router.asPath);
  }, [router.asPath]);

  return (
    <nav className={`bg-white w-full h-[82px] border-t-[1px] border-gray-100 ${className}`}>
      <ul className="grid grid-cols-3">
        {NAV_LIST_INFO.map(({ icon, selectedIcon, href, text }, index) => (
          <li key={index} className="w-max justify-self-center">
            <div className="flex flex-col justify-center items-center pt-[8px]">
              <IconAnchor
                icon={selectedPath === href ? selectedIcon : icon}
                href={href}
                className="flex justify-center"
              />
              <span
                className={`text-overline w-fit ${
                  selectedPath === href ? 'text-primary-blue' : 'text-gray-400'
                }  pt-[3px]`}
              >
                {text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
