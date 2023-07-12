import fromPairs from 'lodash/fromPairs';

import zh from './zh/embed';

const localePairs = [['zh', zh]];

export const languages = localePairs.map((locale) => locale[0]);

export const embedLocales = fromPairs(localePairs);
