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
