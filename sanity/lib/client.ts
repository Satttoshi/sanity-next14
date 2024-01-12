import { createClient } from 'next-sanity';

import { apiVersion, dataset } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId: '8c40hnwi',
  useCdn: false,
});
