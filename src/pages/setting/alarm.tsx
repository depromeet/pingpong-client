import Header from '@/components/common/Header';
import Toggle from '@/components/common/Radio';

export default function SettingAlarm() {
  const handleAlarmClick = () => {
    //TODO: native interface
  };

  return (
    <>
      <Header title="알림 설정" className="bg-white border-b border-gray-100" />
      <ul className="mt-4 px-[16px]">
        <li className="text-b2 text-gray-600 py-[12px] flex justify-between items-center border-b border-gray-100">
          푸시 알림
          <Toggle isOn onClick={handleAlarmClick} />
        </li>
      </ul>
    </>
  );
}
