import Axios from 'axios';
import {BASE_URL} from '../constants';

const api = Axios.create({
  baseURL: BASE_URL,
});

export default api;
