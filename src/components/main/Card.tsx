import ProfileImg from '../common/ProfileImg';
import Tag from '../common/Tag';
import { HeartIcon } from '../icons';

const Card = (props: Card) => {
  const { like, tag, title, type, user } = props;

  return (
    <div className="border border-gray-100 rounded-[12px] overflow-hidden">
      <main className="w-full bg-bg-gray p-5 flex flex-col gap-5">
        <section className="flex justify-between">
          <article className="flex gap-4">
            <Tag color={type === 'exchange' ? 'blue' : 'red'}>{tag.label}</Tag>
            {type === 'share' && (
              <Tag styleType="OUTLINE" color="red">
                재능 나눔
              </Tag>
            )}
          </article>
          <article className="flex gap-4 items-center">
            <HeartIcon />
            <span className="text-b4">{like > 999 ? '999+' : like}</span>
          </article>
        </section>
        <section className="overflow-hidden">
          <h1 className="text-t2 overflow-hidden w-full whitespace-nowrap text-ellipsis">{title}</h1>
        </section>
        {user && (
          <section className="bg-white rounded-xl flex items-center gap-3 px-5 py-3">
            <article>
              <ProfileImg size="small" alt="profile" src={'/images/empty-profile.png'} />
            </article>
            <article className="flex flex-col overflow-hidden">
              <h2 className="text-gray-500 text-b4 w-full whitespace-nowrap text-ellipsis overflow-hidden">
                {user.nickname}
              </h2>
              <span className="text-gray-400 text-b5">{user.rank}</span>
            </article>
          </section>
        )}
      </main>
      {type === 'exchange' && props.needed && (
        <footer className="p-5">
          <h3 className="text-gray-500 text-b4 mb-3">이런 재능이 필요해요</h3>
          <section className="flex flex-wrap gap-2">
            {props.needed.map((tag) => (
              <Tag className="mt-1" key={tag.id} styleType="LIGHT" color="blue">
                {tag.label}
              </Tag>
            ))}
          </section>
        </footer>
      )}
    </div>
  );
};

export default Card;
