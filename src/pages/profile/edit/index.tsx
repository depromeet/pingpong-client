import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Input from '@/components/common/Input';
import SelectInput from '@/components/common/SelectInput';
import Textarea from '@/components/common/Textarea';
import Toast from '@/components/common/Toast';
import { ArrowIcon } from '@/components/icons';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import useEditProfile from '@/hooks/useEditProfile';
import { popupAtom, tabAtomFamily, talentRegisterOrderAtom } from '@/store/components';
import { profileCategoryResetSelector } from '@/store/components/selectors';

const POPUP_INFO = {
  title: '프로필 편집을 그만두시겠어요?',
  content: '지금까지 작성한 내용은 저장되지 않아요',
  confirmText: '그만둘래요',
  cancelText: '취소',
};

const ProfileEdit = () => {
  const { data: userData, isSuccess: userIsSuccess } = useUserInfoQuery();
  const [name, setName] = useState('');
  const [nameError] = useState('');
  const [givenTalents, setGivenTalents] = useRecoilState(tabAtomFamily('givenTalents'));
  const [takenTalents, setTakenTalents] = useRecoilState(tabAtomFamily('takenTalents'));
  const setReset = useSetRecoilState(profileCategoryResetSelector);
  const [introduction, setIntroduction] = useState('');
  const [link, setLink] = useState('');
  const router = useRouter();
  const setOrder = useSetRecoilState(talentRegisterOrderAtom);
  const setPopup = useSetRecoilState(popupAtom);
  const { mutate, isSuccess, isError } = useEditProfile();

  useEffect(() => {
    setOrder(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userIsSuccess) {
      setGivenTalents((prev) => {
        return prev.length > 0
          ? prev
          : userData.givenTalents.map((givenTalent) => {
              return { id: givenTalent.id, name: givenTalent.content };
            });
      });
      setTakenTalents((prev) => {
        return prev.length > 0
          ? prev
          : userData.takenTalents.map((takenTalent) => {
              return { id: takenTalent.id, name: takenTalent.content };
            });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userIsSuccess]);

  useEffect(() => {
    if (userIsSuccess) {
      setName(userData.nickname);
      setIntroduction(userData.introduction);
      setLink(userData.profileLink);
    }
  }, [userData, userIsSuccess]);

  const handleBackButton = () => {
    setPopup({
      ...POPUP_INFO,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onCancel: () => {},
      onConfirm: () => {
        router.push('/profile');
        setReset(true);
      },
    });
  };

  const handleSaveButton = () => {
    const profileInfo = {
      nickname: name,
      introduction: introduction,
      profileLink: link,
      givenTalents: givenTalents.map((givenTalent) => givenTalent.id),
      takenTalents: takenTalents.map((takenTalent) => takenTalent.id),
    };

    mutate(profileInfo);
  };

  return (
    <>
      <header className="flex gap-7 items-center w-full px-7 sticky top-0 py-[5%] bg-bg-gray z-30 justify-between">
        <button className="w-[20px] h-[20px] left-0" onClick={handleBackButton}>
          <ArrowIcon color="black" direction="right" className="w-[9px] h-[18px]" />
        </button>
        <h1 className="text-t3">프로필 편집</h1>
        <span className="text-primary-blue text-button" onClick={handleSaveButton}>
          저장
        </span>
      </header>
      <main className="px-[16px]">
        <section className="mt-[26px]">
          <label htmlFor="name" className="text-t3">
            이름
          </label>
          <Input
            className="mt-[8px]"
            id="name"
            placeholder="이름을 입력해주세요"
            maxLength={10}
            value={name}
            onChange={(v) => setName(v)}
            error={nameError}
          />
        </section>
        <section className="mt-[28px]">
          <label className="text-t3">이런 재능을 줄 수 있어요 (최대 5개)</label>
          <SelectInput
            href="/profile/edit/givenTalents"
            placeholder="카테고리를 선택해주세요"
            selectedInputList={givenTalents}
            className="mt-[8px]"
          />
        </section>
        <section className="mt-[28px]">
          <label className="text-t3">이런 재능을 받고 싶어요 (최대 5개)</label>
          <SelectInput
            href="/profile/edit/takenTalents"
            placeholder="카테고리를 선택해주세요"
            selectedInputList={takenTalents}
            className="mt-[8px]"
          />
        </section>
        <section className="mt-[28px]">
          <label id="info" className="text-t3">
            자기소개
          </label>
          <span className="block text-b4 text-gray-400 pt-[2px]">간단한 인사와 소개 글을 작성해 주세요.</span>
          <Textarea
            id="info"
            value={introduction}
            maxLength={300}
            className="mt-[8px]"
            placeholder="소개 글을 작성해 주세요."
            onChange={(v) => setIntroduction(v)}
          />
        </section>
        <section className="mt-[28px]">
          <label id="link" className="text-t3">
            링크
          </label>
          <span className="block text-b4 text-gray-400 pt-[2px]">
            재능을 보여줄 수 있는 링크가 있다면 입력해 주세요. (선택)
          </span>
          <Input
            className="mt-[8px]"
            id="link"
            placeholder="링크를 입력해주세요."
            value={link}
            onChange={(v) => setLink(v)}
          />
        </section>
      </main>
      {isError && <Toast value="프로필 저장에 실패했어요." />}
      {isSuccess && <Toast value="프로필이 저장되었어요." />}
    </>
  );
};

export default ProfileEdit;
