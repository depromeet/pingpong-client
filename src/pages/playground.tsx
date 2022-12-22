import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import BottomSheet from '@/components/common/BottomSheet';
import BottomSheetOptions from '@/components/common/BottomSheetOptions';
import Card from '@/components/common/Card';
import Carousel from '@/components/common/CardCarousel';
import CircleImg from '@/components/common/CircleImg';
import RadioButtonGroup from '@/components/common/RadioButtonGroup';
import RadioGroup from '@/components/common/RadioGroup';
import useRadioGroup from '@/hooks/useRadioGroup';
import { bottomSheetAtom } from '@/store/components';

const Playground = () => {
  const [isShowing, setIsShowing] = useRecoilState(bottomSheetAtom);

  const mockList = [
    { id: 1, label: '하하' },
    { id: 2, label: '호호' },
    { id: 2, label: '후후' },
  ];

  // const { list, currentSelected, onChange } = useRadioGroup([
  //   {
  //     key: 'INCORRECT',
  //     label: '사용자 정보가 부정확해요.',
  //   },
  //   {
  //     key: 'MARKETING',
  //     label: '광고성/홍보성 글이에요.',
  //   },
  //   {
  //     key: 'DUPLICATED',
  //     label: '이 게시글이 도배 되어있어요.',
  //   },
  // ]);

  // const {
  //   list: locationList,
  //   currentSelected: selectedLocation,
  //   onChange: onChangeLocation,
  // } = useRadioGroup([
  //   {
  //     key: 'ONLINE',
  //     label: '온라인',
  //   },
  //   {
  //     key: 'OFFLINE',
  //     label: '오프라인',
  //   },
  //   {
  //     key: 'BOTH',
  //     label: '상관 없음',
  //   },
  // ]);

  // const {
  //   list: periodList,
  //   currentSelected: selectedPeriod,
  //   onChange: onChangePeriod,
  // } = useRadioGroup([
  //   {
  //     key: 'DAYLY',
  //     label: '1주 미만',
  //   },
  //   {
  //     key: 'WEEKLY',
  //     label: '1주 이상',
  //   },
  //   {
  //     key: 'MONTHLY',
  //     label: '1개월 이상',
  //   },
  //   {
  //     key: 'NONE',
  //     label: '조율 가능',
  //   },
  // ]);

  // const {
  //   list: timeList,
  //   currentSelected: selectedTime,
  //   onChange: onChangeTime,
  // } = useRadioGroup([
  //   {
  //     key: 'MORNING',
  //     label: '오전',
  //     subLabel: '6AM - 12PM',
  //   },
  //   {
  //     key: 'AFTERNOON',
  //     label: '오후',
  //     subLabel: '12PM - 6PM',
  //   },
  //   {
  //     key: 'NIGHT',
  //     label: '밤',
  //     subLabel: '6PM - 12AM',
  //   },
  //   {
  //     key: 'NONE',
  //     label: '조율 가능',
  //   },
  // ]);

  const cardMockData = {
    id: 7,
    isShare: false,
    title: '제목',
    subCategory: '대1중1소1',
    likes: 0,
    memberId: 1,
    nickname: '감자',
    image:
      'https://images.unsplash.com/photo-1670433000581-7b36d9b2fe4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2318&q=80',
    ranks: '루키',
    takenTalents: ['대1중1소1', '대1중1소2', '대1중2소1'],
  };

  const cardListData = {
    content: [
      {
        id: 12,
        isShare: false,
        title: '제목',
        subCategory: '대1중1소1',
        likes: 0,
        memberId: 1,
        nickname: '감자',
        image:
          'https://images.unsplash.com/photo-1670470076011-cd2f6e03ca40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        ranks: '루키',
        takenTalents: ['대1중1소1', '대1중1소2', '대1중2소1'],
      },
      {
        id: 89,
        isShare: false,
        title: '주고받고',
        subCategory: '프론트엔드 개발',
        likes: 0,
        memberId: 1,
        nickname: '감자',
        image:
          'https://images.unsplash.com/photo-1670433000581-7b36d9b2fe4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2318&q=80',
        ranks: '루키',
        takenTalents: ['대1중1소1', '대1중1소2', '대1중2소1'],
      },
      {
        id: 8,
        isShare: true,
        title: '디자인 가르쳐드립니다',
        subCategory: 'UI/UX',
        likes: 0,
        memberId: 1,
        nickname: '감자',
        image:
          'https://images.unsplash.com/photo-1670258880107-e0b02eb0ff14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        ranks: '루키',
        takenTalents: [],
      },
    ],
    totalElements: 26,
    totalPages: 13,
    hasNextPages: true,
  };

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
        {/* <RadioGroup list={list} currentSelected={currentSelected} onChange={onChange} /> */}
      </PlaygroundBlock>
      <PlaygroundBlock>
        <PlaygroundTitle>Radio Button (Group)</PlaygroundTitle>
        <PlaygroundRow>
          {/* <RadioButtonGroup
            size="small"
            list={locationList}
            currentSelected={selectedLocation}
            onChange={onChangeLocation}
          /> */}
        </PlaygroundRow>
        <PlaygroundRow>
          {/* <RadioButtonGroup list={periodList} currentSelected={selectedPeriod} onChange={onChangePeriod} /> */}
        </PlaygroundRow>
        <PlaygroundRow>
          {/* <RadioButtonGroup list={timeList} currentSelected={selectedTime} onChange={onChangeTime} /> */}
        </PlaygroundRow>
      </PlaygroundBlock>
      <PlaygroundBlock>
        <PlaygroundTitle>Card</PlaygroundTitle>
        <PlaygroundRow>
          <Card {...cardMockData} />
        </PlaygroundRow>
        <PlaygroundTitle>CircleImg</PlaygroundTitle>
        <PlaygroundRow>
          <CircleImg size="large" src={cardMockData.image} alt="user-profile-img" />
          <CircleImg size="medium" alt="user-profile-img" />
        </PlaygroundRow>
      </PlaygroundBlock>
      <PlaygroundTitle>Card Carousel</PlaygroundTitle>
      <Carousel list={cardListData.content} />
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
  background-color: #e5f4ff;
  margin-bottom: 2rem;
  padding: 4rem;
`;

const PlaygroundRow = styled.div`
  margin-top: 2rem;
`;

const PlaygroundTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.3rem;
  margin-top: 3rem;
`;
