import {commonParams, options} from './config'
import jsonp from '@/common/js/jsonp'

const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
export function getSingerDetail (singerId) {
  const data = Object.assign({}, commonParams, {
    uin: 0,
    singermid: singerId,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    _: 1515854077976,
    g_tk: 5381
  })
  return jsonp(url, data, options)
}
