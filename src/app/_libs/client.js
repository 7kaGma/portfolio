import { createClient } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error(
    'MICROCMS_SERVICE_DOMAIN is required',
  );
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
  serviceDomain:
    process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getWorks = async (queries) => {
  const listData = await client.getList({
    endpoint: 'work',
    queries,
  });
  return listData;
};

export const getProfile = async () => {
  const data = await client.get({
    endpoint: 'profile',
  });
  return data;
};
