import Image from 'next/image';
import { useRouter } from 'next/router';

import Header from '@/components/common/Header';

export default function ProfileSetting() {
  const router = useRouter();

  const settingList = [
    { label: '알림 설정', onClick: () => handleMoveToLink('/setting/alarm') },
    { label: '버전 정보', info: '1.0' },
    { label: '오픈소스 라이센스', onClick: () => handleMoveToLink('/setting/license') },
    { label: '이용약관', onClick: () => handleMoveToLink('/setting/terms') },
    { label: '개인정보 처리방침', onClick: () => handleMoveToLink('/setting/privacy') },
    { label: '로그아웃', onClick: () => null }, //FIXME: open modal
    { label: '탈퇴하기', onClick: () => null },
  ];

  const handleMoveToLink = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Header title="설정" className="bg-white border-b border-gray-100" />
      <ul className="mt-4 px-[16px]">
        {settingList.map((list, i) => (
          <li
            key={i}
            onClick={list.onClick}
            className="text-b2 text-gray-600 py-[12px] flex justify-between items-center border-b border-gray-100 cursor-pointer"
          >
            {list.label}
            {list.onClick ? (
              <Image src={'/icons/setting-arrow.svg'} width={10} height={12} alt="arrow" />
            ) : (
              <span className="text-gray-400">{list.info}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
