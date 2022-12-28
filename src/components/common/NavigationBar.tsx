import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { ProfileIcon, TalentRegisterIcon, TalentSearchIcon } from '@/components/icons';
import { useAuth } from '@/hooks/useAuth';
import { popupAtom } from '@/store/components';

interface NavigationBarProps {
  className?: string;
}

const NAV_LIST_INFO = [
  { icon: <TalentSearchIcon />, selectedIcon: <TalentSearchIcon color="#4D77FF" />, href: '/main', text: '재능 탐색' },
  {
    icon: <TalentRegisterIcon />,
    selectedIcon: <TalentRegisterIcon color="#4D77FF" />,
    href: '/talent/register',
    text: '재능 등록',
  },
  { icon: <ProfileIcon />, selectedIcon: <ProfileIcon color="#4D77FF" />, href: '/profile', text: '프로필' },
];

const NavigationBar = ({ className }: NavigationBarProps) => {
  const router = useRouter();
  const setPopup = useSetRecoilState(popupAtom);

  const { isLogin } = useAuth();

  const handleNavClick = (href: string) => {
    if (href === '/main') {
      router.push(href);
      return;
    }

    //TODO: 게시글 선택 했을때도 해당 팝업 띄우기
    if (!isLogin) {
      setPopup({
        title: '로그인한 사용자만 볼 수 있어요',
        content: '로그인하고 더 다양한 서비스를 이용해 보세요',
        cancelText: '닫기',
        confirmText: '로그인하기',
        onCancel: () => null,
        onConfirm: () => {
          router.push('/');
        },
      });
      return;
    }
    router.push(href);
  };

  return (
    <nav className={`bg-white w-full h-[82px] ${className}`}>
      <ul className="grid grid-cols-3">
        {NAV_LIST_INFO.map(({ icon, selectedIcon, href, text }, index) => (
          <li key={index} className="w-max justify-self-center" onClick={() => handleNavClick(href)}>
            <div className="flex flex-col justify-center items-center pt-[8px]">
              <div className="flex justify-center">{router.pathname === href ? selectedIcon : icon}</div>
              <span
                className={`text-overline w-fit ${
                  router.pathname === href ? 'text-primary-blue' : 'text-gray-400'
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
