import axios from 'axios';

import { INSTANCE_URL } from  '@redux/constants';

const instance = axios.create({
  withCredentials: true,
  baseUrl: INSTANCE_URL
});

export const counterAPI = {
  sendCounterNumber(pageName) {
    console.log(pageName)
    // return instance.post(`http://192.168.10.185/Server2.0/metrics.php`, pageName)
    //   .catch(error => error)
  }
}
