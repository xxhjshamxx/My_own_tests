
import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
<<<<<<< HEAD
      baseURL: process.env.BASE_URL || 'http://nginx',
      headers: req.headers
=======
      baseURL: 'http://my-release-ingress-nginx-controller.default.svc.cluster.local',
      headers: req.headers,
      withCredentials: true
>>>>>>> fe6a152 (Final fixes before presentation)
    });
  }
  else {
    return axios.create({
      withCredentials: true
    });
  }
};