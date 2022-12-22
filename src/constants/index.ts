export const ExchangeType = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  ANY_TYPE: 'ANY_TYPE',
} as const;

export const ExchangeTypeLabel = {
  ONLINE: '온라인',
  OFFLINE: '오프라인',
  ANY_TYPE: '상관 없음',
} as const;

export const ExchangePeriod = {
  A_WEEK: 'A_WEEK',
  LESS_THAN_A_MONTH: 'LESS_THAN_A_MONTH',
  MORE_THAN_A_MONTH: 'MORE_THAN_A_MONTH',
  ANY_PERIOD: 'ANY_PERIOD',
} as const;

export const ExchangePeriodLabel = {
  A_WEEK: '1주일 이하',
  LESS_THAN_A_MONTH: '1주일 이상',
  MORE_THAN_A_MONTH: '1달 이상',
  ANY_PERIOD: '조율 가능',
} as const;

export const ExchangeTime = {
  NOON: 'NOON',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING',
  ANY_TIME: 'ANY_TIME',
} as const;

export const ExchangeTimeLabel = {
  NOON: '오전',
  AFTERNOON: '오후',
  EVENING: '밤',
  ANY_TIME: '조율 가능',
} as const;
