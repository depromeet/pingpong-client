import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/CircleCheckbox';
import IconAnchor from '@/components/common/IconAnchor';
import Input from '@/components/common/Input';
import { ArrowIcon } from '@/components/icons';
import { Layout } from '@/components/styles';
import useNicknameMutate from '@/hooks/queries/useNicknameMutate';
import useNickname from '@/hooks/useNickname';

const agreementList = [
  { label: '(필수) 서비스 이용약관에 동의', href: '/setting/terms' },
  { label: '(필수) 개인정보 처리방침에  동의', href: '/setting/privacy' },
];

const Nickname = () => {
  const router = useRouter();

  const [agreement, setAgreement] = useState([false, false]);
  const { name, handleNameChange, handleNameClear, errorMessage } = useNickname();

  const { mutate, isSuccess } = useNicknameMutate();
  const queryClient = useQueryClient();

  const buttonDisabled = useMemo(() => agreement.some((v) => !v) || errorMessage.length > 0, [agreement, errorMessage]);

  const handleAgreementClick = (index: number) => {
    setAgreement(([first, second]) => (index === 0 ? [!first, second] : [first, !second]));
  };

  const handleComplete = () => {
    mutate(name);
  };

  useEffect(() => {
    if (!isSuccess) return;

    queryClient.invalidateQueries(['userInfo']);
    router.push('/main');
  }, [isSuccess, queryClient, router]);

  return (
    <main className="relatvie w-screen h-screen p-[16px]">
      <div className="relative w-full h-full">
        <h1 className="text-h2 pt-[15%]">
          Ping-Pong에서 사용할
          <br />
          닉네임을 입력해주세요.
        </h1>
        <ul className="mt-[16px]">
          <li className="flex itesm-center gap-3 text-b3 text-gray-500">
            <Image src="/icons/check-active.svg" alt="check" width={10} height={10} />
            공백 포함 2자 이상 10자 이하
          </li>

          <li className="flex itesm-center gap-3 text-b3 text-gray-500">
            <Image src="/icons/check-active.svg" alt="check" width={10} height={10} />
            한글/영어만 사용이 가능해요
          </li>
        </ul>
        <Input
          className="mt-[24px] flex"
          value={name}
          error={errorMessage}
          onChange={handleNameChange}
          handleClear={handleNameClear}
          placeholder="닉네임을 입력해주세요."
        />
        <section className="mt-[20%]">
          {agreementList.map((item, i) => (
            <div key={i} className="flex gap-[6px] items-center mt-[17px]">
              <CircleCheckbox checked={agreement[i]} onClick={() => handleAgreementClick(i)} />
              <IconAnchor
                className="flex items-center justify-between w-full pr-[10px]"
                href={item.href}
                icon={
                  <>
                    <span className="text-gray-500 text-b3">{item.label}</span>
                    <ArrowIcon color="gray" direction="left" width={10} height={13} />
                  </>
                }
              />
            </div>
          ))}
        </section>
        <Layout.FixedBottom>
          <Button onClick={handleComplete} className="w-full" disabled={buttonDisabled}>
            완료
          </Button>
        </Layout.FixedBottom>
      </div>
    </main>
  );
};

export default Nickname;
