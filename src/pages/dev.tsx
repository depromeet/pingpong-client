import { useRouter } from 'next/router';

export default function DevPage() {
  const router = useRouter();

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLstZzsmIHqtowiLCJtZW1iZXJJZCI6NSwiZXhwIjoxNjcwNDIyMjEwfQ.VekC3NKcgpQMGVIB6wO6kyTNRRHOESBV1nbfdEih2Dp009EM3OMm8xi-DdpUcAm3W7z8HlGrwA67DSE8t0k28Q';

  const onClick = () => {
    //TODO: remove logout
    sessionStorage.setItem('token', token);
    router.push('/main');
  };

  return (
    <div className="w-full p-5">
      <button className="bg-gray-300 p-3 w-full" onClick={onClick}>
        get Token
      </button>
    </div>
  );
}
