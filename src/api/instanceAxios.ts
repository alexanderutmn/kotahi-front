import axios from 'axios';

export const instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_APP_BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const setAuthHeader = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const setJournalHeader = () => {
  return { headers: { journal: process.env.REACT_APP_JOURNAL_TAG! } };
};

export const setAuthAndJournalHeaders = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      journal: process.env.REACT_APP_JOURNAL_TAG!,
    },
  };
};
