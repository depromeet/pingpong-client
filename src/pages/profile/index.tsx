import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import ProfileView from '@/components/profile/ProfileView';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import { usePopupWithBlock } from '@/hooks/usePopupWithBlock';
import { myInfoAtom } from '@/store/components';

export default function ProfileMe() {
  const [userInfo, setUserInfo] = useRecoilState(myInfoAtom);
  const { data, isSuccess } = useUserInfoQuery();

  usePopupWithBlock(undefined);

  useEffect(() => {
    if (isSuccess) {
      setUserInfo(data);
    }
  }, [data, isSuccess, setUserInfo]);

  return <main className="bg-bg-gray">{userInfo && <ProfileView isMe={true} userInfo={userInfo} />}</main>;
}
