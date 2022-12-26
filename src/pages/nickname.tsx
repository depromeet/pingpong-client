import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

const Nickname = () => {
  const [name, setName] = useState('');

  return (
    <main className="relatvie w-screen h-screen p-[16px]">
      <div className="relative w-full h-full">
        <h1 className="text-h2 pt-[15%]">
          Ping-Pong에서 사용할
          <br />
          이름을 입력해주세요.
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
          onChange={(value) => setName(value.replace(/[0-9]/, ''))}
          placeholder="이름을 입력해주세요."
        />
        <div className="absolute left-0 bottom-0 w-full">
          <Link href="/">
            <Button className="w-full" onClick={() => null} disabled={name.length < 2 || name.length > 10}>
              완료
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Nickname;
