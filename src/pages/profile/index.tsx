import ProfileView from '@/components/profile/ProfileView';
import useUserInfoQuery from '@/hooks/queries/useUserInfoQuery';
import { usePopupWithBlock } from '@/hooks/usePopupWithBlock';

export default function ProfileMe() {
  usePopupWithBlock(undefined);
  const { data: userInfo, isSuccess: userInfoIsSuccess } = useUserInfoQuery();

  return <main className="bg-bg-gray">{userInfoIsSuccess && <ProfileView isMe={true} {...userInfo} />}</main>;
}
