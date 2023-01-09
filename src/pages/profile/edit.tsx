import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import SelectInput from '@/components/common/SelectInput';
import Textarea from '@/components/common/Textarea';
import useEditProfile from '@/hooks/useEditProfile';
import useNickname from '@/hooks/useNickname';
import { usePopupWithBlock } from '@/hooks/usePopupWithBlock';
import { useToast } from '@/hooks/useToast';
import { validateLink } from '@/lib/utils';
import { myInfoAtom, tabAtomFamily, talentRegisterOrderAtom } from '@/store/components';

const headerArgs = {
  title: '프로필 편집',
  buttonText: '저장',
  className: 'bg-white border-b border-gray-100',
};

const ProfileEdit = () => {
  const myInfo = useRecoilValue(myInfoAtom);

  const [introduction, setIntroduction] = useState('');
  const [link, setLink] = useState('');
  const { name, setName, errorMessage, setErrorMessage, handleNameChange, handleNameClear } = useNickname();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [introductionError, setIntroductionError] = useState('');

  const [givenTalents, setGivenTalents] = useRecoilState(tabAtomFamily('givenTalents'));
  const [takenTalents, setTakenTalents] = useRecoilState(tabAtomFamily('takenTalents'));

  const setOrder = useSetRecoilState(talentRegisterOrderAtom);

  const { mutate, isSuccess, isError } = useEditProfile();
  const { setToast } = useToast();

  const handleLinkChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setLink(() => validateLink(event.target.value));
  }, []);

  const router = useRouter();

  usePopupWithBlock({
    isShowing: true,
    title: '프로필 편집을 그만두시겠어요?',
    content: '지금까지 작성한 내용은 저장되지 않아요',
    confirmText: '그만둘래요',
    cancelText: '취소',
  });

  useEffect(() => {
    if (isSuccess) {
      setToast('프로필이 저장되었어요.');
      router.push('/profile');
    }
  }, [isSuccess, router, setToast]);

  useEffect(() => {
    isError && setToast('프로필 저장에 실패했어요.');
  }, [isError, setToast]);

  useEffect(() => {
    setOrder(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!myInfo) return;

    setName(myInfo?.nickname);
    setIntroduction(myInfo?.introduction);
    setLink(myInfo?.profileLink);
    setGivenTalents((prev) => {
      return prev.length > 0
        ? prev
        : myInfo?.givenTalents.map((givenTalent) => {
            return { id: givenTalent.id, name: givenTalent.content };
          });
    });
    setTakenTalents((prev) => {
      return prev.length > 0
        ? prev
        : myInfo?.takenTalents.map((takenTalent) => {
            return { id: takenTalent.id, name: takenTalent.content };
          });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myInfo]);

  const handleSaveButton = () => {
    if (errorMessage) return;

    if (name.length === 0 || introduction.length === 0) {
      setErrorMessage(name.length === 0 ? '이름을 작성해주세요' : '');
      setIntroductionError(introduction.length === 0 ? '자기소개를 작성해주세요' : '');
      return;
    }

    const profileInfo = {
      nickname: name,
      introduction: introduction,
      profileLink: link,
      givenTalents: givenTalents.map((givenTalent) => givenTalent.id),
      takenTalents: takenTalents.map((takenTalent) => takenTalent.id),
    };

    setErrorMessage('');
    setIntroductionError('');

    mutate(profileInfo);
  };

  useEffect(() => {
    errorMessage ? setIsButtonDisabled(true) : setIsButtonDisabled(false);
  }, [errorMessage]);

  return (
    <>
      <Header {...headerArgs} isButtonDisabled={isButtonDisabled} onActiveButtonClick={handleSaveButton} />
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
            onChange={handleNameChange}
            handleClear={handleNameClear}
            error={errorMessage}
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
            error={introductionError}
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
            onChange={handleLinkChange}
          />
        </section>
      </main>
    </>
  );
};

export default ProfileEdit;
