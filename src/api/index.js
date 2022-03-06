import request from '../utils/request'
/*
    获取导航列表
*/
export const getList = () => {
  return request({
    method: 'GET',
    url: 'category'
  })
}

/*
    获取头条内容
*/
export const getTop = (data) => {
  return request({
    method: 'GET',
    url: `${data}`
  })
}
