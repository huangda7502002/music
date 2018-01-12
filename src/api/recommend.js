import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

export function getRecommend () {
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: '1'
  })
  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = 'http://ustbhuangyi.com/music/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    loginUin: 0,
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    categoryId: 10000000,
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json'
  })
  return jsonp(url, data, options)
}
