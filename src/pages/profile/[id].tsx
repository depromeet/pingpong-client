import { useRouter } from 'next/router';

import ProfileView from '@/components/profile/ProfileView';
import useProfileQuery from '@/hooks/queries/useProfileQuery';

export default function ProfileDetail() {
  const router = useRouter();
  const memberId = Number(router.query.id) || 0;
  const { data: userInfo, isSuccess } = useProfileQuery(memberId);

  return <main className="bg-bg-gray">{isSuccess && <ProfileView isMe={false} userInfo={userInfo} />}</main>;
}
