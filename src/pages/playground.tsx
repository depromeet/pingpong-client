import styled from 'styled-components';

import BottomSheet from '@/components/common/BottomSheet';
import BottomSheetOptions from '@/components/common/BottomSheetOptions';
import RadioButtonGroup from '@/components/common/RadioButtonGroup';
import RadioGroup from '@/components/common/RadioGroup';
import useBottomSheet from '@/hooks/useBottomSheet';
import useRadioGroup from '@/hooks/useRadioGroup';

const Playground = () => {
  const { isShowing, setIsShowing } = useBottomSheet();

  const mockList = [
    { id: 1, label: '하하' },
    { id: 2, label: '호호' },
    { id: 2, label: '후후' },
  ];

  const { list, currentSelected, onChange } = useRadioGroup([
    {
      key: 'INCORRECT',
      label: '사용자 정보가 부정확해요.',
    },
    {
      key: 'MARKETING',
      label: '광고성/홍보성 글이에요.',
    },
    {
      key: 'DUPLICATED',
      label: '이 게시글이 도배 되어있어요.',
    },
  ]);

  const {
    list: locationList,
    currentSelected: selectedLocation,
    onChange: onChangeLocation,
  } = useRadioGroup([
    {
      key: 'ONLINE',
      label: '온라인',
    },
    {
      key: 'OFFLINE',
      label: '오프라인',
    },
    {
      key: 'BOTH',
      label: '상관 없음',
    },
  ]);

  const {
    list: periodList,
    currentSelected: selectedPeriod,
    onChange: onChangePeriod,
  } = useRadioGroup([
    {
      key: 'DAYLY',
      label: '1주 미만',
    },
    {
      key: 'WEEKLY',
      label: '1주 이상',
    },
    {
      key: 'MONTHLY',
      label: '1개월 이상',
    },
    {
      key: 'NONE',
      label: '조율 가능',
    },
  ]);

  const {
    list: timeList,
    currentSelected: selectedTime,
    onChange: onChangeTime,
  } = useRadioGroup([
    {
      key: 'MORNING',
      label: '오전',
      subLabel: '6AM - 12PM',
    },
    {
      key: 'AFTERNOON',
      label: '오후',
      subLabel: '12PM - 6PM',
    },
    {
      key: 'NIGHT',
      label: '밤',
      subLabel: '6PM - 12AM',
    },
    {
      key: 'NONE',
      label: '조율 가능',
    },
  ]);

  return (
    <PlaygroundContainer>
      <PlaygroundBlock>
        <PlaygroundTitle>Bottom Sheet</PlaygroundTitle>
        <BottomSheet isShowing={isShowing} onClose={() => setIsShowing(false)}>
          <BottomSheetOptions list={mockList} />
        </BottomSheet>
        <TestButton onClick={() => setIsShowing(true)}>바텀시트 열기</TestButton>
      </PlaygroundBlock>
      <PlaygroundBlock>
        <PlaygroundTitle>Radio (Group)</PlaygroundTitle>
        <RadioGroup list={list} currentSelected={currentSelected} onChange={onChange} />
      </PlaygroundBlock>
      <PlaygroundBlock>
        <PlaygroundTitle>Radio Button (Group)</PlaygroundTitle>
        <PlaygroundRow>
          <RadioButtonGroup
            size="small"
            list={locationList}
            currentSelected={selectedLocation}
            onChange={onChangeLocation}
          />
        </PlaygroundRow>
        <PlaygroundRow>
          <RadioButtonGroup list={periodList} currentSelected={selectedPeriod} onChange={onChangePeriod} />
        </PlaygroundRow>
        <PlaygroundRow>
          <RadioButtonGroup list={timeList} currentSelected={selectedTime} onChange={onChangeTime} />
        </PlaygroundRow>
      </PlaygroundBlock>
    </PlaygroundContainer>
  );
};

export default Playground;

const TestButton = styled.button`
  background-color: black;
  color: white;
  width: 10rem;
  height: 5rem;
`;

const PlaygroundContainer = styled.div`
  padding: 3rem;
`;

const PlaygroundBlock = styled.div`
  background-color: #eee;
  margin-bottom: 2rem;
  padding: 4rem;
`;

const PlaygroundRow = styled.div`
  margin-top: 4rem;
`;

const PlaygroundTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
