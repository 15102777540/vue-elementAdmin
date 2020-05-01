import axios from '@/libs/api.request'

export const GetPetList = (info) => {
  const data = info
  console.log(data)
  return axios.request({
    url: 'Pet/GetPetList',
    params:data,
    method: 'get',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Token':'1973271032',
      'TimeStamp':new Date().getTime()
  }
  })
}
