import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import DeleteAccountRadioGroup from '@/components/setting/DeleteAccountRadioGroup';
import useDeleteAccountMutate from '@/hooks/queries/useDeleteAccountMutate';
import { useAuth } from '@/hooks/useAuth';
import useHeader from '@/hooks/useHeader';
import { usePopupWithBlock } from '@/hooks/usePopupWithBlock';

export default function ProfileSetting() {
  const router = useRouter();

  const { logout } = useAuth();
  const { setPopup } = usePopupWithBlock();

  const handleMoveToLink = (path: string) => {
    router.push(path);
  };

  const [deleteReason, setDeleteReason] = useState('');
  const { mutate: deleteAccountMutate } = useDeleteAccountMutate();

  const handleDeletePopup = useCallback(() => {
    setPopup({
      title: 'Ping-Pong 서비스 탈퇴하기',
      content: `불편하셨던 점을 저희에게 말씀해주세요.<br/>서비스 개선에 적극 반영하도록 할게요.`,
      children: <DeleteAccountRadioGroup setDeleteReason={setDeleteReason} />,
      onConfirm: () => deleteAccountMutate({ content: deleteReason }),
      confirmText: '선택 완료',
      cancelText: '취소',
    });
  }, [setDeleteReason, setPopup, deleteAccountMutate, deleteReason]);

  const settingList = [
    { label: '알림 설정', onClick: () => handleMoveToLink('/setting/alarm') },
    { label: '버전 정보', info: '1.0' },
    { label: '오픈소스 라이센스', onClick: () => handleMoveToLink('/setting/license') },
    { label: '이용약관', onClick: () => handleMoveToLink('/setting/terms') },
    { label: '개인정보 처리방침', onClick: () => handleMoveToLink('/setting/privacy') },
    {
      label: '로그아웃',
      onClick: () => {
        setPopup({
          title: '정말 로그아웃 하시겠어요?',
          cancelText: '취소',
          confirmText: '로그아웃',
          onCancel: () => null,
          onConfirm: () => logout(),
        });
      },
    },
    {
      label: '탈퇴하기',
      onClick: handleDeletePopup,
    },
  ];

  useEffect(() => {
    handleDeletePopup();
  }, [deleteReason, handleDeletePopup]);

  useHeader({
    title: '설정',
    className: 'bg-white border-b border-gray-100',
  });

  return (
    <>
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
