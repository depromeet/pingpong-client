import { useRecoilValue } from 'recoil';

import ProfileView from '@/components/profile/ProfileView';
import { myInfoAtom } from '@/store/components';

export default function ProfileMe() {
  const userInfo = useRecoilValue(myInfoAtom);

  return <main className="bg-bg-gray">{userInfo && <ProfileView isMe={true} userInfo={userInfo} />}</main>;
}
