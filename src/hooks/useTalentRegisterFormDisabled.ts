import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { tabAtomFamily, talentRegisterInputKeyAtom, talentRegisterOrderAtom } from '@/store/components';

interface UseTalentRegisterFormDisabledProps {
  requiredInputNumber?: number;
  requiredSubCategoryNumber?: number;
  requiredTakenCategoryNumber?: number;
}

const useTalentRegisterFormDisabled = ({
  requiredInputNumber = 0,
  requiredSubCategoryNumber = 0,
  requiredTakenCategoryNumber = 0,
}: UseTalentRegisterFormDisabledProps) => {
  const [disabled, setDisabled] = useState(false);
  const order = useRecoilValue(talentRegisterOrderAtom);
  const inputKeys = useRecoilValue(talentRegisterInputKeyAtom);
  const subCategory = useRecoilValue(tabAtomFamily('subCategoryId'));
  const takenCategory = useRecoilValue(tabAtomFamily('takenTalentIds'));

  const inputCondition = order === 1 ? inputKeys.length < requiredInputNumber : !inputKeys.includes('takenContent');
  const subCategoryCondition = subCategory.length < requiredSubCategoryNumber;
  const takenCategoryCondition = takenCategory.length < requiredTakenCategoryNumber;

  const disabledCondition =
    order === 1 ? inputCondition || subCategoryCondition : inputCondition || takenCategoryCondition;

  useEffect(() => {
    if (disabledCondition) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [disabledCondition, inputKeys, order]);

  return disabled;
};

export default useTalentRegisterFormDisabled;
