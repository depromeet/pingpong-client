import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import SelectInput from '@/components/common/SelectInput';
import Textarea from '@/components/common/Textarea';
import { useMyInfo } from '@/hooks/queries/useMyInfoQuery';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import useEditProfile from '@/hooks/useEditProfile';
import { useToast } from '@/hooks/useToast';
import { tabAtomFamily, talentRegisterOrderAtom } from '@/store/components';

const headerArgs = {
  title: '프로필 편집',
  activeButton: '저장',
  className: 'bg-white border-b border-gray-100',
};

const ProfileEdit = () => {
  const { myInfo } = useMyInfo();
  const { data: userData, isSuccess: userIsSuccess } = useUserInfoQuery(myInfo?.memberId);

  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [link, setLink] = useState('');

  const [nameError, setNameError] = useState('');
  const [introductionError, setIntroductionError] = useState('');

  const [givenTalents, setGivenTalents] = useRecoilState(tabAtomFamily('givenTalents'));
  const [takenTalents, setTakenTalents] = useRecoilState(tabAtomFamily('takenTalents'));

  const setOrder = useSetRecoilState(talentRegisterOrderAtom);

  const { mutate, isSuccess, isError } = useEditProfile();
  const { setToast } = useToast();

  const handleNameChange = useCallback((v: string) => {
    setName(v);
  }, []);

  useEffect(() => {
    isSuccess && setToast('프로필이 저장되었어요.');
  }, [isSuccess, setToast]);

  useEffect(() => {
    isError && setToast('프로필 저장에 실패했어요.');
  }, [isError, setToast]);

  useEffect(() => {
    setOrder(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userIsSuccess && userData) {
      setName(userData.nickname);
      setIntroduction(userData.introduction);
      setLink(userData.profileLink);
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
  }, [userData, userIsSuccess]);

  const handleSaveButton = () => {
    if (name.length === 0 || introduction.length === 0) {
      setNameError(name.length === 0 ? '이름을 작성해주세요' : '');
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

    setNameError('');
    setIntroductionError('');

    mutate(profileInfo);
  };

  return (
    <>
      <Header {...headerArgs} onActiveButtonClick={handleSaveButton} />
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
            onChange={(v) => setLink(v)}
          />
        </section>
      </main>
    </>
  );
};

export default ProfileEdit;
