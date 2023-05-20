import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

const alovaInstance = createAlova({
  baseURL: 'http://localhost:5173/',
  statesHook: VueHook,
  requestAdapter: GlobalFetch,
  timeout: 5000,
  beforeRequest: (requestHead) => {
    // Add a token to the request object before it is sent.
    requestHead.config.headers.setToken = 'token'
  },
  responded: {
    // on success dispatcher
    onSuccess: async (response) => {
      if (response.status >= 400) {
        throw new Error(response.statusText)
      }
      const res = await response.json()
      if (res.code !== 200) {
        // throw new error when promise.resolve throws an error
        throw new Error(res.message)
      }
      return res.data
    },
    // on failed dispatcher
    onError: (err, method) => {
      // throw new error when promise.reject throws an error
      throw new Error(err.message, method)
    }
  }
})

export default alovaInstance
