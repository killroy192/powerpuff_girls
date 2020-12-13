import qs from 'qs';

export const composeUrl = (url, queries, options) => `${url}?${qs.stringify(queries, options)}`;