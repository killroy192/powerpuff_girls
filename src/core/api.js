import axios from 'axios';

const apiUrl = 'http://api.tvmaze.com/shows/6771';
const getData = axiosRes => axiosRes.data;


export const fetchShow = () => axios.get(apiUrl).then(getData)

/**
 * If use manually open episodes link, general show info should be available as well
 */
export const fetchEpisodes = () => axios.get(`${apiUrl}?embed=episodes`).then(getData)