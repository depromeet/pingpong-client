import { atom } from 'recoil';

const tabAtom = atom<string>({
  key: 'tabAtom',
  default: '',
});

export default tabAtom;
