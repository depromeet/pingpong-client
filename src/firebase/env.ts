import { doc, getDoc } from 'firebase/firestore';

import { db } from './index';

type EnvFile = {
  be: string;
  fe: string;
  redirect: string;
};

const getDevEnv = async () => {
  const envSnap = await getDoc(doc(db, 'env', 'env-dev'));

  if (envSnap.exists()) {
    return envSnap.data() as EnvFile;
  }
  return null;
};

const getProdEnv = async () => {
  const envSnap = await getDoc(doc(db, 'env', 'env-prod'));

  if (envSnap.exists()) {
    return envSnap.data() as EnvFile;
  }
  return null;
};

export { getDevEnv, getProdEnv };
