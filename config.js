/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 배경 음악 ──
  music: {
    enabled: true,
    src: "music/wedding.m4a",
    autoplay: true,
    loop: true,
    volume: 0.4
  },

  // ── 메인 (히어로) ──
  groom: {
    name: "김범준",
    father: "김진호",
    mother: "이유정",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김은지",
    father: "김남년",
    mother: "김향숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-06-19",
    time: "12:10",
    venue: "더아리엘",
    hall: "6층 스카이가든홀",
    address: "경기도 수원시 팔달구 중부대로 181",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1298739354",
      naver: "https://naver.me/xExWTS9N"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "Our Story",
content: "<strong>범</strong>상치 않은 인연으로 만나\n<strong>준</strong>비 없이 서로에게 스며들어\n<strong>은</strong>근히 잘 맞는 두 사람이\n<strong>지</strong>금, 평생을 함께하려 합니다.\n\n서로의 가장 좋은 친구이자\n평생의 편이 되기로 약속했습니다.\n저희의 새로운 발걸음이 시작하는 자리에\n소중한 발걸음으로 함께해주세요."  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "김범준", bank: "국민은행", number: "078502-04-133617" },
      { role: "김진호", bank: "OO은행", number: "000-00-000000" },
      { role: "이유정", bank: "OO은행", number: "000-00-000000" }
    ],
    bride: [
      { role: "김은지", bank: "신한은행", number: "110-470-674616" },
      { role: "김남년", bank: "OO은행", number: "000000-00-000000" },
      { role: "김향숙", bank: "OO은행", number: "000-00-000000-0" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "범준 ♥ 은지 결혼합니다",
    description: "2027년 6월 19일, 소중한 분들을 초대합니다."
  }
};
