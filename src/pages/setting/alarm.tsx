import { useEffect, useState } from 'react';

import Toggle from '@/components/common/Radio';
import useHeader from '@/hooks/useHeader';

export default function SettingAlarm() {
  const [isAlarmOn, setIsAlarmOn] = useState(false);

  const handleAlarmClick = () => {
    window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'setting' }));
  };

  useEffect(() => {
    const onMessageHandler = ({ data }: { data: 'true' | 'false' }) => {
      setIsAlarmOn(data === 'true');
    };

    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'permission' }));

      window.addEventListener('message', onMessageHandler);
      return () => {
        window.removeEventListener('message', onMessageHandler);
      };
    }
  }, []);

  useHeader({ title: '알림 설정', className: 'bg-white border-b border-gray-100' });

  return (
    <>
      <ul className="mt-4 px-[16px]">
        <li className="text-b2 text-gray-600 py-[12px] flex justify-between items-center border-b border-gray-100 cursor-pointer">
          푸시 알림
          <Toggle isOn={isAlarmOn} onClick={handleAlarmClick} />
        </li>
      </ul>
    </>
  );
}
