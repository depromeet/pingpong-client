import styled from 'styled-components';

import { uniqueId } from '@/lib/utils';

import ProfileImg from '../common/ProfileImg';
import Tag from '../common/Tag';
import { HeartIcon } from '../icons';

const Card = ({
  isShare,
  title,
  subCategory,
  likes,
  nickname,
  image,
  ranks,
  takenTalents,
  hideTakenTalents = false,
}: CardInfo) => {
  return (
    <CardWrapper>
      <div className="border border-gray-100 rounded-[12px] overflow-hidden">
        <div className="w-full bg-bg-gray p-5 flex flex-col gap-5">
          <section className="flex justify-between">
            <article className="flex gap-4">
              <Tag color={isShare ? 'red' : 'blue'}>{subCategory}</Tag>
              {isShare && (
                <Tag styleType="OUTLINE" color="red">
                  재능 나눔
                </Tag>
              )}
            </article>
            <article className="flex gap-4 items-center">
              <HeartIcon />
              <span className="text-b4">{likes > 999 ? '999+' : likes}</span>
            </article>
          </section>
          <section className="overflow-hidden">
            <h4 className="text-t2 overflow-hidden w-full whitespace-nowrap text-ellipsis">{title}</h4>
          </section>
          {
            <section className="bg-white rounded-xl flex items-center gap-3 px-5 py-3">
              <article className="rounded-full">
                <ProfileImg size="small" alt="profile" src={image} />
              </article>
              <article className="flex flex-col overflow-hidden">
                <h2 className="text-gray-500 text-b4 w-full whitespace-nowrap text-ellipsis overflow-hidden">
                  {nickname}
                </h2>
                <span className="text-gray-400 text-b5">{ranks}</span>
              </article>
            </section>
          }
        </div>
        {!isShare && !hideTakenTalents && takenTalents.length && (
          <section className=" bg-white p-5">
            <h5 className="text-gray-500  text-b4 mb-3">이런 재능이 필요해요</h5>
            <div className="flex flex-wrap gap-2">
              {takenTalents.map((talent) => (
                <Tag className="mt-1" key={uniqueId('tag')} styleType="LIGHT" color="blue">
                  {talent}
                </Tag>
              ))}
            </div>
          </section>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 100%;
`;
