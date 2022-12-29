import useHeader from '@/hooks/useHeader';

const data = [
  {
    title: '제1조 (목적)',
    contents: [
      {
        content:
          "핑퐁(이하 ‘회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.",
      },
    ],
  },
  {
    title: '제2조 (개인정보 처리의 원칙)',
    contents: [
      {
        content:
          '1. 본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.',
      },
      {
        content: '2. 회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.',
        sub: [
          '1. 회사가 운영하는 웹사이트의 별도의 창을 통하여 공지하는 방법',
          '2. 서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법',
        ],
      },
      {
        content:
          '3. 회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.',
      },
    ],
  },
];

export default function Privacy() {
  useHeader({ title: '개인정보 처리방침' });

  return (
    <main className="px-[20px] py-[16px]">
      <h1 className="text-gray-600 text-t2 mb-[20px]">PING-PONG 개인정보 처리방침</h1>
      {data.map((term, i) => (
        <section key={i} className="mb-[20px]">
          <h2 className="text-gray-600 text-t3 mb-[8px]">{term.title}</h2>
          {term.contents.map((content, j) => (
            <div key={j + 1 + i} className="text-gray-500 text-b2 mb-[8px]">
              {content.content}
              {content.sub &&
                content.sub.map((subContent, k) => (
                  <p key={j + i + k} className="mt-[8px] text-gray-400 ml-[16px]">
                    {subContent}
                  </p>
                ))}
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
