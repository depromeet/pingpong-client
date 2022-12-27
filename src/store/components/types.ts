interface TabProps {
  id: number;
  name: string;
}

interface TagProps {
  id: number;
  name: string;
}

interface TalentRegisterInputInfo {
  inputKey: string;
  contents: string;
}
interface TalentRegisterInfoProps {
  [index: string]: string | string[] | number[] | boolean | number;
}

export type { TabProps, TagProps, TalentRegisterInfoProps, TalentRegisterInputInfo };
