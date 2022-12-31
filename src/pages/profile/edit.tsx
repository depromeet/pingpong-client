import Image from 'next/image';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { updateUserProfile } from '@/apis/user-profile';
import Input from '@/components/common/Input';
import SelectInput from '@/components/common/SelectInput';
import Textarea from '@/components/common/Textarea';
import { useMyInfo } from '@/hooks/queries/useMyInfoQuery';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import useEditProfile from '@/hooks/useEditProfile';
import useHeader from '@/hooks/useHeader';
import { useToast } from '@/hooks/useToast';
import { tabAtomFamily, talentRegisterOrderAtom } from '@/store/components';

const ProfileEdit = () => {
  const { myInfo } = useMyInfo();
  const { data: userData, isSuccess: userIsSuccess } = useUserInfoQuery(myInfo?.memberId);

  const [profile, setProfile] = useState<{ file: File | null; preview: string }>({
    file: null,
    preview: '/images/empty-profile.png',
  });
  const [name, setName] = useState('');
  const [nameError] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [link, setLink] = useState('');

  const [givenTalents, setGivenTalents] = useRecoilState(tabAtomFamily('givenTalents'));
  const [takenTalents, setTakenTalents] = useRecoilState(tabAtomFamily('takenTalents'));

  const setOrder = useSetRecoilState(talentRegisterOrderAtom);

  const { mutate, isSuccess, isError } = useEditProfile();
  const { setToast } = useToast();

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
      setProfile({ preview: userData.image, file: null });
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

  const handleSaveButton = async () => {
    const profileInfo = {
      nickname: name,
      introduction: introduction,
      profileLink: link,
      givenTalents: givenTalents.map((givenTalent) => givenTalent.id),
      takenTalents: takenTalents.map((takenTalent) => takenTalent.id),
    };

    mutate(profileInfo);
    profile.file && (await updateUserProfile(profile.file));
  };
  const handleProfileUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);

    if (!file) {
      return;
    }

    setProfile({ file: file, preview: URL.createObjectURL(file) });
  };

  useHeader({
    title: '프로필 편집',
    activeButton: '저장',
    className: 'bg-white border-b border-gray-100',
    onActiveButtonClick: handleSaveButton,
  });

  return (
    <>
      <section className="pt-[15px] flex items-center justify-center gap-5 flex-col bg-gray-100">
        <div className="relative w-[88px] h-[88px] rounded-full overflow-hidden">
          <Image
            src={profile.preview}
            alt="profile"
            className="w-[88px] aspect-square rounded-full bg-gray-100"
            width={10}
            height={10}
          />
        </div>
        <label
          htmlFor="file-upload"
          className="px-[12px] py-[6px] border border-gray-200 bg-white rounded-[20px] text-b4 mb-[18px]"
        >
          사진 변경하기
          <input type="file" className="hidden" id="file-upload" onChange={handleProfileUpdate} />
        </label>
      </section>
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
    </>
  );
};

export default ProfileEdit;
