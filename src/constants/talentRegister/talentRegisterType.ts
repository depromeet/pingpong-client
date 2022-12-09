export const TalentType = {
  SHARE: 'SHARE',
  EXCHANGE: 'EXCHANGE',
} as const;

export interface TalentRegisterProps {
  sort: keyof typeof TalentType;
  className?: string;
}

export interface TalentRegisterFormProps extends TalentRegisterProps {
  onClick: () => void;
}
