<template>
  <div class="slider" ref="slider">
    <swiper class="slider-group" :options="swiperOption"  ref="sliderGroup">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide class="slider-item" v-for="(item, index) in sliderArr" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" ref="img">
        </a>
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
//  import {addClass} from '@/common/js/dom.js'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            autoplay: true,
            disableOnInteraction: false
          }
        }
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      sliderArr: {
        type: Array,
        default: []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._setSliderWidth()
        this._initSlider()
      })
    },
    methods: {
      _setSliderWidth () {
//        this.children = this.$refs.sliderGroup.$children
//        let width = 0
//        let sliderWidth = document.body.clientWidth
//        for (let i = 0; i < this.children.length - 1; i++) {
//          let child = this.children[i]
//          addClass(child, 'slider-item')
//          child.style.width = sliderWidth + 'px'
//        }
        let sliderWidth = document.body.clientWidth
//        console.log(this.$refs.img)
        for (let i = 0; i < this.$refs.img.length; i++) {
          console.log(this.$refs.img.length)
          let child = this.$refs.img[i]
          child.style.width = sliderWidth + 'px'
        }
      },
      _initSlider () {
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
</style>
