import { useEffect } from 'react';
import styled from 'styled-components';

import useRadioGroup from '@/hooks/useRadioGroup';

import RadioGroup from '../common/RadioGroup';

const DeleteAccountRadioGroup = ({ setDeleteReason }: { setDeleteReason: (value: string) => void }) => {
  const deleteReasonList = [
    { key: 'DELETE_ACCOUNT_1', label: '원하는 재능이 없어요.' },
    { key: 'DELETE_ACCOUNT_2', label: '재능을 등록하는 과정이 불편해요.' },
    { key: 'DELETE_ACCOUNT_3', label: '재능을 교환/나눔하는 과정이 불편해요.' },
    { key: 'DELETE_ACCOUNT_4', label: '불쾌감을 주는 사용자를 만났어요.' },
    { key: 'DELETE_ACCOUNT_5', label: '새로운 계정으로 가입하고 싶어요.' },
  ];
  const { list, currentSelected, onChange } = useRadioGroup({ list: deleteReasonList });

  useEffect(() => {
    if (!currentSelected) return;
    console.log('setDeleteReason');
    setDeleteReason(currentSelected.label);
  }, [currentSelected, setDeleteReason]);

  return (
    <DeleteAccountRadioGroupContainer>
      <RadioGroup currentSelected={currentSelected} list={list} onChange={onChange} />
    </DeleteAccountRadioGroupContainer>
  );
};

export default DeleteAccountRadioGroup;

const DeleteAccountRadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.4rem;
`;
