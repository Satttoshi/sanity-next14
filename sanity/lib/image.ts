import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: '8c40hnwi',
  dataset: dataset || '',
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url();
};
