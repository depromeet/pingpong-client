import useHeader from '@/hooks/useHeader';

const Terms = () => {
  useHeader({ title: '이용약관' });
  return (
    <main className="px-[20px] py-[16px]">
      <h1 className="text-gray-600 text-t2 mb-[20px]" id="-ping-pong-">
        핑퐁(PING-PONG) 서비스 이용약관
      </h1>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-1-">
        제1장 총칙
      </h2>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-1-">
        제1조 (목적)
      </h3>
      <p className="text-gray-500 text-b4 mb-[6px]">
        본 약관은 서비스 이용자가 핑퐁(이하 “회사”라 합니다)이 제공하는 온라인 서비스 (이하 “서비스”라 합니다)에
        회원으로 가입하고 이를 이용함에 있어 회사와 그 이용자의 권리⋅의무 및 책임 사항을 규정함을 목적으로 합니다.
      </p>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-2-">
        제2조 (정의)
      </h3>
      <p className="text-gray-500 text-b4 mb-[6px]">
        본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 정의되지 않은 본 약관상 용어의 의미는 일반적인 거래 관행에
        의합니다.
      </p>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          회원: 회원 가입을 한 자로서, 회사와 제공하는 모든 서비스를 이용할 수 있는 자를 말합니다
        </li>
        <li className="list-disc">
          비회원: 회원 가입을 하지 않은 자로서, 회사가 제공하는 제한된 서비스를 이용할 수 있는 자를 말합니다.
        </li>
        <li className="list-disc">
          재능: 서비스 내에서 제공하는 카테고리에 내애서 이용자가 가진 능력 혹은 지식을 의미합니다. (
          <a
            className="break-words"
            href="https://docs.google.com/spreadsheets/d/1eu8PsOYzqK1JRMQFKteVR30-LQf7b0AxD6qj3UJrlp4/htmlview#"
          >
            https://docs.google.com/spreadsheets/d/1eu8PsOYzqK1JRMQFKteVR30-LQf7b0AxD6qj3UJrlp4/htmlview#
          </a>
          )
        </li>
        <li className="list-disc">재능 나눔: 회원이 다른 회원에게 일반적으로 재능을 제공하는 과정을 말합니다.</li>
        <li className="list-disc">재능 교환: 회원이 다른 회원과 서로 재능을 교환하는 과정을 말합니다.</li>
        <li className="list-disc">재능 등록: 회원이 재능 나눔/교환에 대한 게시글을 작성하는 과정을 말합니다. </li>
        <li className="list-disc">
          재능 탐색: 서비스 내에서 이용자가 재능 나눔/교환에 대한 게시글을 찾아보고 게시글에 대한 상세 내용을 확인하는
          전 과정을 말합니다.
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-3-">
        제3조 (약관의 게시와 개정)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">회사는 본 약관의 내용을 회원이 쉽게 확인할 수 있도록 기술적 조치를 취합니다.</li>
        <li className="list-disc">
          회사는 콘텐츠산업진흥법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 소비자기본법 등
          관련 법령을 위반하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.
        </li>
        <li className="list-disc">
          회사가 약관을 개정할 경우 기존 약관과 개정 약관 및 개정 약관 적용 일자와 개정 사유를 명시하고 기존 약관과 함께
          개정 약관 적용 일자 7일 전부터 적용 일자 이후 상당한 기간 동안, 개정 약관의 내용이 회원에게 불리한 경우 개정
          약관 적용 일자 30일 전부터 적용 일 이후 상당한 기간 동안, 이를 서비스 웹페이지 및 어플리케이션 화면에
          게시하거나 기타 방법으로 회원에게 통지합니다.
        </li>
        <li className="list-disc">
          회사가 ‘전항에 따라 회원에게 통지한 후 개정 약관 고지일로부터 개정 약관 시행일 이후 7일이 지나는 날까지 회원이
          거부 의사를 표시하지 아니할 경우 회원이 개정 약관에 동의한 것으로 본다는 뜻’을 고지하였음에도 회원의 거부
          의사표시가 없는 경우 개정 약관에 동의한 것으로 간주합니다. 회원이 개정 약관에 동의하지 않을 경우 해당 회원은
          서비스 이용 계약을 해지할 수 있습니다.
        </li>
        <li className="list-disc">
          회원은 회사가 제공하는 서비스를 이용함에 있어서 전자상거래 등에서의 소비자보호에 관한 법률, 전자금융거래법,
          소비자기본법, 표시∙광고의 공정화에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을
          준수하여야 하며, 본 약관의 규정을 들어 관련법령 위반에 대한 면책을 주장할 수 없습니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-2-">
        제2장 서비스의 내용 및 회원 가입
      </h2>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-4-">
        제4조 (서비스 이용 계약)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          회사가 제공하는 서비스를 이용하기 위한 이용 계약은 회사의 서비스를 이용하고자 하는 자의 회원가입 신청에 대하여
          회사가 승낙함으로써 성립합니다.
        </li>
        <li className="list-disc">
          전항의 회원가입 신청을 하기 위해서는 회사가 정한 온라인 회원가입 신청서에 필수 기재사항을 입력하고 본인인증
          절차를 완료하여야 합니다.
        </li>
        <li className="list-disc">
          회원가입 신청을 위해 필수적으로 기재한 항목이 변경된 경우(폐업 등의 사유 발생 포함) 해당 회원은 위 변경 사실을
          직접 수정하거나 회사에 1:1문의 또는 전화를 통해 통지하여야 하며, 통지하지 않음으로 인하여 발생한 회원의
          불이익에 관하여는 회원이 책임을 집니다.
        </li>
        <li className="list-disc">
          회사가 정한 필수 기재사항을 입력하지 않거나 허위의 정보를 입력하거나 회원가입 신청을 하려는 자가 만 14세
          미만일 경우 회원가입 신청이 제한될 수 있습니다.
        </li>
        <li className="list-disc">
          회사는 회원에게 유익한 정보를 제공하기 위해 위 필수 기재사항 이외에도 회원가입을 신청하는 자에게 취미, 관심사
          등 정보 제공을 요청할 수 있으나 회원가입을 신청하는 자는 위 정보의 제공을 거절할 수 있습니다.
        </li>
        <li className="list-disc">
          회사는 회사의 서비스를 이용하기 위해 회원가입 신청을 한 자가 본조 제2.항에서 정한 필수 기재사항을 정확하게
          입력하고 본 약관에 동의한 경우 원칙적으로 서비스의 이용을 승낙합니다. 다만, 회사는 다음과 같은 사유가 있는
          경우 회원가입 신청의 승낙을 거절 또는 보류할 수 있고, 이 경우 회사는 승낙 거절 또는 보류의 사유와 승낙에
          필요한 추가 요청 정보 등 관련 사항을 통지합니다.
          <ol className="text-gray-400 text-b4 ml-[18px]">
            <li className="list-disc">회사의 설비에 여유가 없는 경우</li>
            <li className="list-disc">회사의 서비스 제공에 기술적인 문제가 있는 경우</li>
            <li className="list-disc">
              회원가입 신청자가 본 약관에 따라 회원 자격을 상실하거나 이용 계약이 해지된 적이 있는 경우 (단, 회사의 회원
              재가입 승낙을 얻은 경우는 예외)
            </li>
            <li className="list-disc">타인의 명의를 도용한 경우</li>
            <li className="list-disc">허위의 정보를 기재한 경우</li>
            <li className="list-disc">기타 회사의 합리적인 판단 하에 필요하다고 인정하는 경우</li>
          </ol>
        </li>
        <li className="list-disc">
          전항에 따라 회사의 서비스의 이용을 승낙받은 회원은 재능 탐색을 통해 원하는 회원과 재능 나눔, 교환할 수 있으며
          재능 등록을 통해 게시글을 작성할 수 있습니다.{' '}
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-5-">
        제5조 (재능 등록)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          제4조에 따라 회사로부터 회원가입 신청을 승낙 받아 이용 계약이 성립된 회원이 회사의 서비스를 이용하여 다른
          회원에게 재능을 나눔/교환하고자 할 경우 재능 등록을 통해 생성된 게시글을 거쳐야 합니다.
        </li>
        <li className="list-disc">
          <p className="text-gray-500 text-b4 mb-[6px]">
            재능 등록을 하기 위해서는 회사가 정한 온라인 등록 신청서에 다음의 필수 기재사항을 입력하여야 하며, 재능
            등록자의 다음 각 호의 정보는 회원에게 공개됩니다.
          </p>
          <ul className="text-gray-400 text-b4 ml-[18px]">
            <li className="list-disc">재능 나눔</li>
            <li className="list-disc">나누고 싶은 재능</li>
            <li className="list-disc">게시글 제목</li>
            <li className="list-disc">상세 설명</li>
            <li className="list-disc">오픈채팅 링크</li>
            <li className="list-disc">
              재능 나눔 환경 (온라인, 오프라인, 상관없음 중 택1)
              <ol className="text-gray-400 text-b4 ml-[18px]">
                <li className="list-disc">재능 나눔 기간 (1주 미만, 1주 이상, 1개월 이상, 조율가능 중 택1)</li>
              </ol>
            </li>
            <li className="list-disc">
              <p className="text-gray-500 text-b4 mb-[6px]">선호하는 시간대 (오전, 오후, 밤, 조율 가능 중 택1) </p>
            </li>
            <li className="list-disc">
              <p className="text-gray-500 text-b4 mb-[6px]">재능 교환</p>
            </li>
            <li className="list-disc">주고 싶은 재능</li>
            <li className="list-disc">게시글 제목</li>
            <li className="list-disc">상세 설명</li>
            <li className="list-disc">오픈채팅 링크</li>
            <li className="list-disc">받고 싶은 재능</li>
            <li className="list-disc">상세 설명</li>
            <li className="list-disc">
              재능 나눔 환경 (온라인, 오프라인, 상관없음 중 택1)
              <ol className="text-gray-400 text-b4 ml-[18px]">
                <li className="list-disc">재능 나눔 기간 (1주 미만, 1주 이상, 1개월 이상, 조율가능 중 택1)</li>
              </ol>
            </li>
            <li className="list-disc">선호하는 시간대 (오전, 오후, 밤, 조율 가능 중 택1) </li>
          </ul>
        </li>
        <li className="list-disc">
          재능 등록자가 서비스 이용을 위해 입력하여 제공한 신원정보는 재능 나눔/교환에 대한 청약을 한 회원의 요청에 따라
          해당 회원에게 제공될 수 있습니다.
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-6-">
        제6조 (서비스의 제공)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          <p className="text-gray-500 text-b4 mb-[6px]">회사가 제공하는 서비스의 종류는 아래와 같습니다.</p>
          <ol className="text-gray-400 text-b4 ml-[18px]">
            <li className="list-disc">
              재능 탐색 서비스
              <ul className="text-gray-400 text-b4 ml-[18px]">
                <li className="list-disc">
                  이용자는 회사가 제공하는 웹사이트 또는 어플리케이션을 통하여 회원이 등록한 여러 재능을 탐색할 수
                  있습니다.
                </li>
                <li className="list-disc">재능 나눔 서비스</li>
                <li className="list-disc">
                  회원은 재능 등록을 통해 만들어진 재능 나눔 게시글의 오픈채팅 링크를 통해 일방적으로 재능을 제공하거나
                  재능을 나눔 받을 수 있습니다.
                </li>
                <li className="list-disc">재능 교환 서비스</li>
                <li className="list-disc">
                  회원은 재능 등록을 통해 만들어진 재능 교환 게시글의 오픈채팅 링크를 통해 다른 회원과 재능을 교환해볼
                  수 있습니다.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li className="list-disc">
          <p className="text-gray-500 text-b4 mb-[6px]">
            회사는 연중무휴, 24시간 서비스를 제공함을 원칙으로 하되, 컴퓨터 등 정보통신설비의 보수, 점검, 교체, 고장 등
            운영상 상당한 이유가 있는 경우 회원에게 통지한 후 서비스의 제공을 일시적으로 중단할 수 있습니다. 다만,
            회사가 사전에 서비스의 중단을 통지할 수 없었던 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
          </p>
        </li>
        <li className="list-disc">
          회사는 서비스의 제공을 위한 별도의 계약 종료, 신규 서비스 개시, 기존 서비스 개정 등의 사유로 서비스의 내용을
          변경할 수 있습니다.
        </li>
        <li className="list-disc">
          회사는 서비스의 내용에 변경이 있는 경우 변경된 서비스가 적용되기 30일 이전부터 적용 일자 이후 상당한 기간까지
          웹사이트 및 어플리케이션 공지사항을 통해 회원들에게 변경된 서비스의 내용을 사전 공지합니다. 다만 회원의 거래와
          관련하여 중대한 영향을 미치는 변경 사항이 있는 경우 회원에게 별도로 통지합니다.
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-7-">
        제7조 (이용 계약의 종료 및 회원 자격 상실)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          회원은 언제든지 회사에 해지의 의사를 통지함으로써 이용 계약을 해지할 수 있습니다. 다만 회원은 회사의 해지
          의사를 통지하기 전에 진행 중인 재능 관련 절차를 모두 완료, 철회, 취소하여야 하며, 철회 또는 취소로 인한
          불이익은 해당 회원이 부담합니다.
        </li>
        <li className="list-disc">
          회사는 원칙적으로 전항의 이용 계약 해지의 의사 표시를 확인한 후 해당 회원의 게시글과 해당 계정을 삭제하여 해지
          절차를 완료해야 합니다. 다만, 다음 각 호의 사유가 있는 경우 이용 계약 해지 절차를 보류할 수 있습니다.
          <ol className="text-gray-400 text-b4 ml-[18px]">
            <li className="list-disc">
              이용 계약 해지의 의사표시를 한 자가 회원 당사자인지 여부를 확인할 수 없는 경우
            </li>
            <li className="list-disc">회원이 서비스 이용에 관하여 회사에 변제할 채무가 남아있는 경우</li>
            <li className="list-disc">이용 계약 해지의 의사표시를 한 회원에 관한 사기 및 분쟁 문제가 남아 있는 경우</li>
          </ol>
        </li>
        <li className="list-disc">
          회사는 본 약관 또는 운영정책에 따라 특정한 사유가 발생한 경우 회원의 자격을 박탈하고 이용계약을 해지할 수
          있습니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-3-">
        제3장 개인정보보호
      </h2>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-8-">
        제8조 (개인정보보호 및 개인정보 제공 동의 등)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          회사는 개인정보처리방침에 따라 회원가입 시 회원으로부터 제공 받은 정보를 수집 및 보관합니다.
        </li>
        <li className="list-disc">
          회사는 회원의 회원가입 신청을 위해 제공 받은 정보를 다음의 예외적인 경우가 아닌 한 원활한 서비스 제공 이외의
          목적으로 사용하거나 이용자의 동의 없이 제3자에게 제공하지 않습니다.
          <ol className="text-gray-400 text-b4 ml-[18px]">
            <li className="list-disc">
              관련 법령에 근거하여 회원 정보의 이용 및 제3자에 대한 정보 제공을 허용하는 경우
            </li>
            <li className="list-disc">회사의 약관 및 운영 정책 등에 따라 회원의 동의를 얻은 경우</li>
          </ol>
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-4-">
        제4장 회사와 회원의 책임과 의무
      </h2>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-12-">
        제12조 (회사의 의무)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          회사는 원활한 서비스의 제공 및 정보의 보안을 위하여 이에 필요한 인력과 설비를 적절하게 유지하고 점검 또는 복구
          조치 등을 성실하게 이행합니다.
        </li>
        <li className="list-disc">
          회사는 회원의 동의 없이 회원의 정보를 수집 또는 활용하거나 제3자에게 제공하지 않습니다.
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-13-">
        제13조 (회원의 의무)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          회원은 본 약관, 운영정책, 이용안내 사항과 관련 법령을 준수하여야 하며 기타 회사 업무에 방해되는 행위를
          하여서는 안됩니다.
        </li>
        <li className="list-disc">
          회사는 회원이 본 약관 및 운영정책에서 제한 또는 금지하는 행위를 한 경우 해당 회원이 회사로부터 부수적으로 제공
          받은 혜택의 전부 또는 일부를 회수하거나 계정 접속을 제한 또는 회원 자격을 박탈할 수 있고, 해당 회원의 게시글을
          임시 삭제 또는 영구 삭제 할 수 있습니다. 이에 따라 회원 자격을 박탈 당한 자의 재가입은 제한될 수 있습니다.
        </li>
        <li className="list-disc">
          회사가 전항에 따른 조치를 취할 경우 원칙적으로 사전에 해당 회원에게 통지하나 긴급을 요하는 등 부득이한 사유가
          있는 경우 선 조치 후 사후 통지할 수 있습니다.
        </li>
        <li className="list-disc">
          조치의 대상인 회원이 제2항에 따른 회사의 조치에 대하여 이의가 있는 경우 회사에 이의를 신청할 수 있습니다.
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-14-">
        제14조 (회원에 대한 통지)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          회사가 회원에 대한 통지를 하는 경우 본 약관에 별도의 규정이 없는 한 서비스 제공을 위한 웹사이트 또는
          어플리케이션 내 알림으로 통지하거나 회원이 회원가입 신청 시(또는 이후 회사에 변경 통지한) 입력한 이메일 주소로
          이메일 발송, 휴대전화번호로 SMS 또는 카카오톡 메시지 발송을 통해 통지할 수 있습니다.
        </li>
        <li className="list-disc">
          회사는 회원 전체에 대한 통지가 필요한 경우 7일 이상의 웹사이트 및 어플리케이션 공지사항 화면에 통지의 내용을
          게시함으로써 전항의 통지를 갈음할 수 있습니다.
        </li>
      </ol>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-5-">
        제5장 분쟁의 해결
      </h2>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-15-">
        제15조 (분쟁조정센터)
      </h3>
      <p className="text-gray-500 text-b4 mb-[6px]">
        회사는 서비스 이용에 관한 회원의 불만이나 회원간 분쟁의 접수 및 해결을 위한 인력 및 설비를 갖춘 분쟁조정센터를
        운영하고, 분쟁조정의 절차에 관한 상세 내용을 정하는 분쟁조정기준을 제정합니다.
      </p>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-16-">
        제16조 (분쟁의 해결을 위한 신원정보 제공)
      </h3>
      <p className="text-gray-500 text-b4 mb-[6px]">
        서비스 이용 간 분쟁에 관한 관계기관의 회사에 대한 요청에 따라 회사는 관계기관에 회원의 신원 정보를 제공할 수
        있습니다.
      </p>
      <h2 className="text-gray-600 text-t3 my-[8px]" id="-6-">
        제6장 기타
      </h2>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-17-">
        제17조 (운영정책)
      </h3>
      <p className="text-gray-500 text-b4 mb-[6px]">
        회사는 회원에게 건전하고 안전한 서비스를 원활하게 제공하기 위해 운영정책을 수립하고 운영합니다.
      </p>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-18-">
        제18조 (저작권 등 콘텐츠에 대한 권리의 귀속)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">
          서비스의 저작권 및 지적재산권을 전적으로 회사에 귀속됩니다. 다만, 제휴 계약에 따라 제공된 저작물은 그렇지
          아니합니다.
        </li>
        <li className="list-disc">
          회사가 제공하는 서비스의 디자인, 회사가 만든 텍스트, 스크립트(script), 그래픽, 회원 상호간 메시지 전송 기능 등
          회사가 제공하는 서비스에 관한 모든 상표, 서비스 마크, 로고 등 관련 저작권 기타 지적재산권은 대한민국 및 외국의
          관련 법령에 근거하여 회사가 보유하고 있거나 회사에게 소유권 또는 사용권이 있습니다.
        </li>
        <li className="list-disc">
          회원은 본 약관으로 인하여 서비스를 소유하거나 서비스에 관한 저작권을 보유하게 되는 것이 아니라, 회사로부터
          서비스의 이용을 허락 받게 되는 것입니다.
        </li>
        <li className="list-disc">
          회원은 회사에 의해 명시적으로 허락된 내용을 제외하고는 서비스를 통해 얻어지는 회원 상태 정보를 영리 목적으로
          사용, 복사, 유통할 수 없고, 회사가 만든 텍스트, 스크립트 등을 복사하거나 유통할 수 없습니다.
        </li>
        <li className="list-disc">
          회사는 서비스와 관련하여 회원에게 회사가 정한 이용 조건에 따라 계정, 아이디, 콘텐츠 등을 이용할 수 있는 이용
          권한을 부여하며, 회원은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.
        </li>
        <li className="list-disc">
          회사는 서비스를 통해 얻어지는 회원의 게시물 관련 정보를 영리 목적으로 회원의 허락 없이 사용할 수 있습니다.
        </li>
        <li className="list-disc">
          회원이 서비스를 이용하면서 발생 및 생성된 정보에 대한 저작권 및 지적재산권은 모두 회사에 귀속됩니다. 다만,
          회원이 단독으로 생성한 콘텐츠에 대해서는 회사와 해당 회원에게 공동 소유권 또는 사용권이 있습니다.
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-19-">
        제19조 (재판권 및 준거법)
      </h3>
      <ol className="text-gray-400 text-b4 ml-[18px]">
        <li className="list-disc">본 약관과 회사와 회원간의 서비스 이용 계약에 관하여는 대한민국 법령이 적용된다.</li>
        <li className="list-disc">
          회사와 회원간에 발생한 분쟁에 관한 소송은 소송의 관할은 당사자 간의 합의에 따르며, 사전 합의된 바가 없는
          경우에는 민사소송법의 관할 규정에 따릅니다.
        </li>
      </ol>
      <h3 className="text-gray-500 text-b2 mb-[8px]" id="-20-">
        제20조 (특별규정)
      </h3>
      <p className="text-gray-500 text-b4 mb-[6px]">
        이 약관에 명시되지 않은 사항은 전자거래기본법, 전자서명법, 전자상거래 등에서의 소비자보호에 관한 법률 등 기타
        관련법령의 규정에 의합니다.
      </p>
      <p className="text-gray-500 text-b4 mb-[6px]">이 방침은 2022년 12월 31일부터 적용됩니다.</p>
    </main>
  );
};

export default Terms;
