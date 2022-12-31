import useHeader from '@/hooks/useHeader';

export default function Privacy() {
  useHeader({ title: '개인정보 처리방침' });

  return (
    <main className="px-[20px] py-[16px]">
      <h1 className="text-gray-600 text-t2 mb-[20px]">핑퐁(PING-PONG) 개인정보 처리방침</h1>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-1-">
        제1조 (목적)
      </h2>
      <p className="text-gray-500 text-b2">
        핑퐁(이하 ‘회사&#39;라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘서비스’)를 이용하는 개인(이하 ‘이용자’ 또는
        ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한
        법률(이하 &#39;정보통신망법&#39;) 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고
        원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-2-">
        제2조 (개인정보 처리의 원칙)
      </h2>
      <p className="text-gray-500 text-b2">
        개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가
        있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한
        이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-3-">
        제3조 (본 방침의 공개)
      </h2>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수
          있습니다.
        </li>
        <li className="list-disc">
          회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.
          <ol className="text-gray-500 text-b3 ml-[18px]">
            <li className="list-disc">회사가 운영하는 웹사이트의 별도의 창을 통하여 공지하는 방법</li>
            <li className="list-disc">서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법</li>
          </ol>
        </li>
        <li className="list-disc">
          회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한
          변경이 있을 경우에는 최소 30일 전에 공지합니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-4-">
        제4조 (회원 가입을 위한 정보)
      </h2>
      <p className="text-gray-500 text-b2">회원가입 시 가입에 필요한 정보를 아래와 같이 수집하고 있습니다.</p>
      <ul className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">이메일 주소 (필수)</li>
      </ul>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-5-">
        제5조 (회사 서비스 제공을 위한 정보)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 이용자에게 회사의 서비스를 제공하기 위하여 다음과 같은 정보를 수집합니다.
      </p>
      <ul className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          회원의 단말기(모바일, 컴퓨터) 정보, OS 종류 및 버전. 서비스 이용 기록, 국가, 언어, 프로그램 설치와 주요 기능
          실행 등 사용량에 대한 기본 정보를 수집합니다.
        </li>
      </ul>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-6-">
        제6조(서비스 이용 및 부정 이용 확인을 위한 정보)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 이용자의 서비스 이용 및 부정이용의 확인 및 분석을 위하여 다음과 같은 정보를 수집합니다
      </p>
      <ul className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">서비스 이용기록, 쿠키, 접속지 정보 및 기기정보 (필수)</li>
      </ul>
      <p className="text-gray-500 text-b2">
        ※ 부정이용 : 재능 나눔/교환 파기, 욕설 등 서비스 제재에 합당한 이유의 신고가 들어오는 경우, 이용약관 등에서
        금지하고 있는 행위, 명의도용 등의 불·편법행위 등을 말합니다. 수집되는 정보는 회사 서비스 이용에 따른 통계∙분석에
        이용될 수 있습니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-9-">
        제9조 (개인정보 수집 방법)
      </h2>
      <p className="text-gray-500 text-b2">회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.</p>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식</li>
        <li className="list-disc">
          어플리케이션 등 회사가 제공하는 홈페이지 외의 서비스를 통해 이용자가 자신의 개인정보를 입력하는 방식
        </li>
        <li className="list-disc">회사 명의 발송의 이메일을 수신한 이용자가 이에 대해 응답하는 방식</li>
        <li className="list-disc">
          이용자가 고객센터의 상담, 게시판에서의 활동 등 회사의 서비스를 이용하는 과정에서 이용자가 입력하는 방식
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-10-">
        제10조 (개인정보 이용)
      </h2>
      <p className="text-gray-500 text-b2">회사는 개인정보를 다음 각 호의 경우에 이용합니다.</p>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">공지사항의 전달 등 회사의 운영에 필요한 경우</li>
        <li className="list-disc">이용문의에 대한 회신, 불만의 처리 등 이용자에 대한 서비스 개선을 위한 경우</li>
        <li className="list-disc">회사의 서비스를 제공하기 위한 경우</li>
        <li className="list-disc">신규 서비스 개발을 위한 경우</li>
        <li className="list-disc">이벤트 및 행사 안내 등 마케팅을 위한 경우</li>
        <li className="list-disc">인구통계학적 분석, 서비스 방문 및 이용기록의 분석을 위한 경우</li>
        <li className="list-disc">개인정보 및 관심에 기반한 이용자간 관계의 형성을 위한 경우</li>
        <li className="list-disc">
          법령 및 회사 약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에
          지장을 주는 행위에 대한 방지 및 제재를 위한 경우
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-11-">
        제11조 (사전동의 등에 따른 개인정보의 제공)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 개인정보 제3자 제공 금지에도 불구하고, 이용자가 사전에 공개하거나 동의한 경우에는 제3자에게 개인정보를
        제공할 수 있습니다. 다만 이 경우에도 회사는 관련 법령 내에서 최소한으로 개인정보를 제공합니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-12-">
        제12조 (개인정보의 보유 및 이용기간)
      </h2>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적이 달성을 위한 기간 동안 개인정보를 보유 및
          이용합니다.
        </li>
        <li className="list-disc">
          전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 가입 및 이용 방지를 위하여 회원 탈퇴
          시점으로부터 최대 1년간 보관합니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-13-">
        제13조(법령에 따른 개인정보의 보유 및 이용기간)
      </h2>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          전자상거래 등에서의 소비자보호에 관한 법률에 따른 보유정보 및 보유기간
          <ol className="text-gray-500 text-b3 ml-[18px]">
            <li className="list-disc">계약 또는 청약철회 등에 관한 기록 : 5년</li>
            <li className="list-disc">계약 또는 청약철회 등에 관한 기록 : 5년</li>
            <li className="list-disc">소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
            <li className="list-disc">표시•광고에 관한 기록 : 6개월</li>
          </ol>
        </li>
        <li className="list-disc">
          통신비밀보호법에 따른 보유정보 및 보유기간
          <ol className="text-gray-500 text-b3 ml-[18px]">
            <li className="list-disc">웹사이트 로그 기록 자료 : 3개월</li>
          </ol>
        </li>
        <li className="list-disc">
          전자금융거래법에 따른 보유정보 및 보유기간
          <ol className="text-gray-500 text-b3 ml-[18px]">
            <li className="list-disc">전자금융거래에 관한 기록 : 5년</li>
          </ol>
        </li>
        <li className="list-disc">
          위치정보의 보호 및 이용 등에 관한 법률
          <ol className="text-gray-500 text-b3 ml-[18px]">
            <li className="list-disc">개인위치정보에 관한 기록 : 6개월</li>
          </ol>
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-14-">
        제14조 (개인정보의 파기원칙)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는
        해당 정보를 지체 없이 파기합니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-15-">
        제15조 (서비스 미이용자에 대한 개인정보처리)
      </h2>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          회사는 1년 동안 회사의 서비스를 이용하지 않은 이용자의 개인정보는 원칙적으로 이용자에게 사전통지하고
          개인정보를 파기하거나 별도로 분리하여 저장합니다.
        </li>
        <li className="list-disc">
          회사는 장기 미이용 이용자의 개인정보는 별도로 분리되어 안전하게 보관하게 되며, 해당 이용자의 통지는 분리 보관
          처리 일을 기준으로 최소 30일 이전에 전자우편주소로 전송됩니다.
        </li>
        <li className="list-disc">
          장기 미이용 이용자는 회사가 미이용자 DB를 별도로 분리하기 전에 계속 서비스를 이용하고자 하는 경우
          웹사이트(이하‘모바일앱’ 포함)에 로그인하시면 됩니다.
        </li>
        <li className="list-disc">
          장기 미이용 이용자는 웹사이트에 로그인할 경우 이용자의 동의에 따라 본인의 계정을 복원할 수 있습니다.
        </li>
        <li className="list-disc">회사는 분리 보관된 개인정보를 3년간 보관 후 지체없이 파기합니다.</li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-16-">
        제16조 (개인정보파기방법)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이로 출력된
        개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기합니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-17-">
        제17조 (개인정보 조회 및 수집동의 철회)
      </h2>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 개인정보수집 동의
          철회를 요청할 수 있습니다.
        </li>
        <li className="list-disc">
          이용자 및 법정 대리인은 자신의 가입정보 수집 등에 대한 동의를 철회하기 위해서는 담당자에게 서면, 전화 또는
          전자우편주소로 연락하시면 회사는 지체 없이 조치하겠습니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-18-">
        제18조 (개인정보 정보변경 등)
      </h2>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          이용자는 회사에게 전조의 방법을 통해 개인정보의 오류에 대한 정정을 요청할 수 있습니다.
        </li>
        <li className="list-disc">
          회사는 전항의 경우에 개인정보의 정정을 완료하기 전까지 개인정보를 이용 또는 제공하지 않으며 잘못된 개인정보를
          제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-19-">
        제19조 (이용자의 의무)
      </h2>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">
          이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은
          이용자 자신에게 있습니다.
        </li>
        <li className="list-disc">
          타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌받을 수
          있습니다.
        </li>
        <li className="list-disc">
          이용자는 전자우편주소, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수
          없습니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-20-">
        제20조 (회사의 개인정보 관리)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조, 훼손 등이 되지 아니하도록 안전성을
        확보하기 위하여 다음과 같이 기술적·관리적 보호대책을 강구하고 있습니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-21-">
        제21조 (삭제된 정보의 처리)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 회사가 수집하는 &quot;개인정보의 보유
        및 이용기간&quot;에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-22-">
        제22조 (해킹 등에 대비한 대책)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해
        최선을 다하고 있습니다.회사는 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 유출 또는 손상되지
        않도록 방지하고 있습니다.회사는 민감한 개인정보(를 수집 및 보유하고 있는 경우)를 암호화 통신 등을 통하여
        네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-23-">
        제23조 (개인정보 유출 등에 대한 조치)
      </h2>
      <p className="text-gray-500 text-b2">
        회사는 개인정보의 분실·도난·유출(이하 &quot;유출 등&quot;이라 한다) 사실을 안 때에는 지체 없이 다음 각 호의 모든
        사항을 해당 이용자에게 알리고 방송통신위원회 또는 한국인터넷진흥원에 신고합니다.
      </p>
      <ol className="text-gray-500 text-b3 ml-[18px]">
        <li className="list-disc">유출 등이 된 개인정보 항목</li>
        <li className="list-disc">유출 등이 발생한 시점</li>
        <li className="list-disc">이용자가 취할 수 있는 조치</li>
        <li className="list-disc">정보통신서비스 제공자 등의 대응 조치</li>
        <li className="list-disc">
          이용자가 상담 등을 접수할 수 있는 부서 및 연락처
          <ol className="text-gray-500 text-b3 ml-[18px]">
            <li className="list-disc">
              회사는 전조에도 불구하고 이용자의 연락처를 알 수 없는 등 정당한 사유가 있는 경우에는 회사의 홈페이지에
              30일 이상 게시하는 방법으로 전조의 통지를 갈음하는 조치를 취할 수 있습니다.
            </li>
          </ol>
        </li>
      </ol>
      <p className="text-gray-500 text-b2">이 방침은 2022년 12월 31일부터 적용됩니다.</p>
    </main>
  );
}
