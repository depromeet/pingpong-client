/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import type { TalentRegisterProps } from '@/constants/talentRegister/talentRegisterType';
import useBackPage from '@/hooks/useBackPage';
import useRegisterTalentPost from '@/hooks/useRegisterTalentPost';
import { useToast } from '@/hooks/useToast';
import { talentRegisterOrderAtom } from '@/store/components';
import { talentRegisterSelector } from '@/store/components/selectors';

import Button from '../common/Button';
import TalentRegisterTextRadioButtonGroup from './TalentRegisterTextRadioButtonGroup';

const ENVIRONMENT = {
  SHARE: {
    radioList: [
      {
        key: 'ONLINE',
        label: '온라인',
      },
      {
        key: 'OFFLINE',
        label: '오프라인',
      },
      {
        key: 'ANY_TYPE',
        label: '상관 없음',
      },
    ],
    inputKey: 'exchangeType',
    htmlFor: 'radioButtonEnvironment',
    title: '재능 나눔 환경을 선택해 주세요',
    size: 'small' as const,
  },
  EXCHANGE: {
    radioList: [
      {
        key: 'ONLINE',
        label: '온라인',
      },
      {
        key: 'OFFLINE',
        label: '오프라인',
      },
      {
        key: 'ANY_TYPE',
        label: '상관 없음',
      },
    ],
    inputKey: 'exchangeType',
    htmlFor: 'radioButtonEnvironment',
    title: '재능 교환 환경을 선택해 주세요',
    size: 'small' as const,
  },
};

const PERIOD = {
  SHARE: {
    radioList: [
      {
        key: 'A_WEEK',
        label: '1주 미만',
      },
      {
        key: 'LESS_THAN_A_MONTH',
        label: '1주 이상',
      },
      {
        key: 'MORE_THAN_A_MONTH',
        label: '1개월 이상',
      },
      {
        key: 'ANY_PERIOD',
        label: '조율 가능',
      },
    ],
    inputKey: 'exchangePeriod',
    htmlFor: 'radioButtonPeriod',
    title: '재능 나눔 기간을 선택해 주세요',
  },
  EXCHANGE: {
    radioList: [
      {
        key: 'A_WEEK',
        label: '1주 미만',
      },
      {
        key: 'LESS_THAN_A_MONTH',
        label: '1주 이상',
      },
      {
        key: 'MORE_THAN_A_MONTH',
        label: '1개월 이상',
      },
      {
        key: 'ANY_PERIOD',
        label: '조율 가능',
      },
    ],
    inputKey: 'exchangePeriod',
    htmlFor: 'radioButtonPeriod',
    title: '재능 교환 기간을 선택해 주세요',
  },
};

const TIME = {
  radioList: [
    {
      key: 'NOON',
      label: '오전',
      subLabel: '6AM - 12PM',
    },
    {
      key: 'AFTERNOON',
      label: '오후',
      subLabel: '12PM - 6PM',
    },
    {
      key: 'EVENING',
      label: '밤',
      subLabel: '6PM - 12AM',
    },
    {
      key: 'ANY_TIME',
      label: '조율 가능',
    },
  ],
  inputKey: 'exchangeTime',
  htmlFor: 'radioButtonTime',
  title: '선호하는 시간대를 선택하세요',
};

const TalentRegisterFormTwo = ({ className, sort }: TalentRegisterProps) => {
  const router = useRouter();
  const talentInfo = useRecoilValue(talentRegisterSelector);

  const { handleOrder: onBackClick } = useBackPage(talentRegisterOrderAtom);
  const { data, mutate, isSuccess, isError } = useRegisterTalentPost();
  const { setToast } = useToast();

  useEffect(() => {
    if (isSuccess) {
      router.push(`/posts/${data.data.id}`);
    }
  }, [data, isSuccess, router]);

  useEffect(() => {
    setToast('재능 등록에 실패했어요.');
  }, [isError, setToast]);

  return (
    <form className={`${className} px-[16px] py-[24.5px]`}>
      <TalentRegisterTextRadioButtonGroup options={ENVIRONMENT[sort]} />
      <TalentRegisterTextRadioButtonGroup options={PERIOD[sort]} />
      <TalentRegisterTextRadioButtonGroup options={TIME} />
      <div className="grid grid-cols-[0.32fr_1fr] gap-x-[8px] mt-[100px]">
        <Button buttonStyle="SECONDARY" type="button" onClick={onBackClick} className="w-full h-[48px]">
          이전
        </Button>
        {/**FIXME: Mutation 타입 설정 필요 */}
        <Button type="button" onClick={() => mutate(talentInfo as any)} className="w-full h-[48px]">
          {sort === 'SHARE' ? '재능 나눔 등록하기' : '재능 교환 등록하기'}
        </Button>
      </div>
    </form>
  );
};

export default TalentRegisterFormTwo;
