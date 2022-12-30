import { useEffect } from 'react';
import styled from 'styled-components';

import useRadioGroup from '@/hooks/useRadioGroup';

import RadioGroup from '../common/RadioGroup';

const PostReportRadioGroup = ({ setReportReason }: { setReportReason: (value: string) => void }) => {
  const reportReasonList = [
    { key: 'POST_REPORT_1', label: '사용자 정보가 부정확해요.' },
    { key: 'POST_REPORT_2', label: '광고성/홍보성 글이에요.' },
    { key: 'POST_REPORT_3', label: '이 게시글이 도배 되어있어요.' },
    { key: 'POST_REPORT_4', label: '욕설이나 비방이 포함되어 있어요.' },
    { key: 'POST_REPORT_5', label: '외설적인 내용이 포함되어 있어요.' },
  ];
  const { list, currentSelected, onChange } = useRadioGroup({ list: reportReasonList });

  useEffect(() => {
    if (!currentSelected) return;

    setReportReason(currentSelected.label);
  }, [currentSelected, setReportReason]);

  return (
    <PostReportRadioGroupContainer>
      <RadioGroup currentSelected={currentSelected} list={list} onChange={onChange} />
    </PostReportRadioGroupContainer>
  );
};

export default PostReportRadioGroup;

const PostReportRadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.4rem;
`;
