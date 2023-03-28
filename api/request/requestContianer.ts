import axios from "axios"
import urlArgsHandler from "./replace_url";
const requestContianer = {
  "gxb": axios.create({
    timeout: 3000,
    baseURL: 'http://api.bk.gxb.cn/api'
  })
}

for (const key in requestContianer) {
  if (Object.prototype.hasOwnProperty.call(requestContianer, key)) {
    const self = requestContianer[key];
    self.interceptors.request.use(urlArgsHandler.request.onFulfilled)
  }
}

export default requestContianer