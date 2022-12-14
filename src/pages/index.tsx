import Image from 'next/image';

import { useAuth } from '@/hooks/useAuth';

import Button from '../components/common/Button';

export default function Login() {
  const { handleLogin } = useAuth();

  return (
    <main className="w-screen h-screen bg-primary-blue p-[16px] flex flex-col items-center">
      <section className="flex flex-col items-center gap-[16px] mt-[50%]">
        <Image src={'/images/logo.png'} alt="logo" width={230} height={230} priority />
        <p className="text-white text-t3">재능을 교환하고 나누며 성장하는 플랫폼</p>
      </section>
      <section className="w-full flex flex-col h-full justify-end">
        <Button onClick={handleLogin} className="bg-black w-full mb-50">
          <div className="flex text-white items-center justify-center gap-[12px]">
            <Image src={'/icons/apple.svg'} alt="apple" width={15} height={15} />
            Apple로 시작하기
          </div>
        </Button>
        {/* <Button onClick={handleToMain} className="w-full !bg-primary-blue border !border-white mt-[8px]">
          로그인 없이 둘러보기
        </Button> */}
      </section>
    </main>
  );
}
