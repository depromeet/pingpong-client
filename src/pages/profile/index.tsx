import Image from 'next/image';
import Link from 'next/link';

import Tag from '@/components/common/Tag';
import TextBox from '@/components/common/TextBox';

export default function Profile() {
  return (
    <main className="bg-bg-gray">
      <section className="pt-[5%] pb-[6%]">
        <article className="flex gap-7 justify-end pr-7">
          <Link href={'/profile/edit'}>
            <button className="w-[20px] h-[20px]">
              <Image src={'/icons/modify.svg'} alt="modify" width={100} height={100} />
            </button>
          </Link>
          <Link href={'/profile/setting'}>
            <button className="w-[20px] h-[20px]">
              <Image src={'/icons/setting.svg'} alt="setting" width={100} height={100} />
            </button>
          </Link>
        </article>
        <article className="pt-[15px] flex items-center justify-center gap-5 flex-col">
          <div>
            <Image src={'/images/empty-profile.png'} alt="profile" width={100} height={100} />
          </div>
          <span className="text-h2">{`말하는 감자`}</span>
        </article>
      </section>
      <section className="border-y border-gray-100 bg-white p-[16px]">
        <article className="flex gap-5 items-center relative">
          <div className="p-[9px] bg-primary-blue rounded-xl w-[20%]">
            <Image src={'/images/ranking.png'} alt="ranking" width={100} height={100} />
          </div>
          <div className="flex flex-col">
            <span className="text-t2">비기너</span>
            <span className="text-b3 text-gray-400">좋아요 0</span>
          </div>
          <button className="px-[12px] py-[6px] border border-gray-200 rounded-[20px] text-b4 absolute right-5">
            등급 알아보기
          </button>
        </article>
      </section>
      <section className="bg-white my-[8px] border-y border-gray-100 flex flex-col gap-[28px] px-[16px] py-[28px]">
        <article>
          <h2 className="text-t3 mb-[8px]">이런 재능을 줄 수 있어요</h2>
          <div className="flex gap-3 flex-wrap">
            {['중국어', 'UX/UI 디자인', '브랜드 디자인'].map((talent, i) => (
              <Tag styleType="LIGHT" key={i}>
                {talent}
              </Tag>
            ))}
          </div>
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">이런 재능을 받고 싶어요</h2>
          <div className="flex gap-3 flex-wrap">
            {['액세서리/패션소품', '제2외국어 자격증', '뜨개/자수/라탄', '그래픽 디자인', '글쓰기'].map((talent, i) => (
              <Tag styleType="LIGHT" key={i}>
                {talent}
              </Tag>
            ))}
          </div>
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">자기소개</h2>
          <TextBox>
            안녕하세요! 디자인과 개발에 관심이 많은 김감자 입니다. 재능을 교환하며 함께 성장하고 싶어요!
          </TextBox>
        </article>
        <article>
          <h2 className="text-t3 mb-[8px]">링크</h2>
          <TextBox>https://www.naver.com</TextBox>
        </article>
      </section>
      <section className="bg-white border-t border-gray-100 pt-[28px] pb-[36px] px-[16px]">
        <h2 className="text-t3 mb-[8px]">내가 쓴 글</h2>
        <button className="w-full border border-gray-200 rounded-[8px] p-[16px] text-gray-500 text-[15px]">
          전체보기
        </button>
      </section>
    </main>
  );
}
