import { useRecoilValue } from 'recoil';

import TalentRegisterFormOne from '@/components/talentRegister/TalentRegisterFormOne';
import TalentRegisterFormThree from '@/components/talentRegister/TalentRegisterFormThree';
import TalentRegisterFormTwo from '@/components/talentRegister/TalentRegisterFormTwo';
import type { TalentType } from '@/constants/talentRegister/talentRegisterType';
import { talentRegisterOrderAtom } from '@/store/components';

const useTalentRegisterForm = (sort: keyof typeof TalentType) => {
  const order = useRecoilValue(talentRegisterOrderAtom);

  return (
    <>
      {order === 1 && <TalentRegisterFormOne sort={sort} />}
      {order === 2 && sort === 'SHARE' && <TalentRegisterFormTwo sort={sort} />}
      {order === 2 && sort === 'EXCHANGE' && <TalentRegisterFormThree sort={sort} />}
      {order === 3 && <TalentRegisterFormTwo sort={sort} />}
    </>
  );
};

export default useTalentRegisterForm;
