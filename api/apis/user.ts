import makeRequest from "../request"
export const $getUserInfo = makeRequest<undefined, undefined,undefined, {year:number} >({
  url: 'gxb:/directories/map/list/{year}',
  method: 'get',
})