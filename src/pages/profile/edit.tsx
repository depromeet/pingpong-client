import { useState } from 'react';

import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import SelectInput from '@/components/common/SelectInput';
import Textarea from '@/components/common/Textarea';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [nameError] = useState(''); //FIXME: fetch data
  const [info] = useState('');
  const [link, setLink] = useState('');

  return (
    <>
      <Header title="프로필 편집" activeButton="저장" className="bg-white border-b border-gray-100" />
      <main className="px-[16px]">
        <section className="mt-[26px]">
          <label htmlFor="name" className="text-t3">
            이름
          </label>
          {/* {explanation && <span className="block text-b4 text-gray-400 pt-[2px]">{explanation}</span>} */}
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
          {/* FIXME: to select talent & to real data */}
          <SelectInput
            href="/profile/talent"
            placeholder="카테고리를 선택해주세요"
            selectedInputList={[]}
            className="mt-[8px]"
          />
        </section>
        <section className="mt-[28px]">
          <label className="text-t3">이런 재능을 받고 싶어요 (최대 5개)</label>
          {/* FIXME: to real data */}
          <SelectInput
            href="/profile/talent"
            placeholder="카테고리를 선택해주세요"
            selectedInputList={[]}
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
            value={info}
            maxLength={300}
            className="mt-[8px]"
            placeholder="소개 글을 작성해 주세요."
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
