
import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: process.env.BASE_URL || 'http://nginx',
      headers: req.headers,
      withCredentials: true
    });
  }
  else {
    return axios.create({
      withCredentials: true
    });
  }
};