import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import ProfileCategoryTagList from '@/components/profile/ProfileCategoryTagList';
import TalentRegisterCategoryTabList from '@/components/talentRegister/TalentRegisterCategoryTabList';
import useHeader from '@/hooks/useHeader';
import { usePopupWithBlock } from '@/hooks/usePopupWithBlock';
import { talentRegisterOrderAtom } from '@/store/components';
import { profileCategoryResetSelector } from '@/store/components/selectors';

const CATEGORY_KEY = 'takenTalents';

const POPUP_INFO = {
  title: '카테고리 선택을 그만두시겠어요?',
  content: '지금까지 선택한 카테고리는 저장되지 않아요',
  confirmText: '그만둘래요',
  cancelText: '취소',
};

const ProfileEditTakenTalents = () => {
  const router = useRouter();
  //* FIXME: order가 아닌 다른 방식으로 reset 로직을 분기처리 할 수 있어야 한다.
  const setOrder = useSetRecoilState(talentRegisterOrderAtom);
  const setReset = useSetRecoilState(profileCategoryResetSelector);

  useEffect(() => {
    setOrder(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  usePopupWithBlock({
    ...POPUP_INFO,
    isShowing: true,
    onConfirm: () => {
      setReset(true);
      router.back();
    },
  });

  useHeader({ title: '이런 재능이 있어요', className: 'bg-white' });

  return (
    <>
      <TalentRegisterCategoryTabList />
      <ProfileCategoryTagList categoryKey={CATEGORY_KEY} />
    </>
  );
};

export default ProfileEditTakenTalents;
