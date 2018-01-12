<template>
  <div class="slider" ref="slider">
    <swiper class="slider-group" :options="swiperOption"  ref="sliderGroup">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide class="slider-item" v-for="(item, index) in sliderArr" :key="index">
        <a :href="item.linkUrl">
          <img @load="imgLoaded" :src="item.picUrl" ref="img">
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
            clickable: true,
            bulletClass: 'my-bullet',
            bulletActiveClass: 'my-bullet-active'
          },
          autoplay: {
            autoplay: true,
            disableOnInteraction: false
          }
        },
        checkLoaded: false
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
        let sliderWidth = document.body.clientWidth
        for (let i = 0; i < this.$refs.img.length; i++) {
          let child = this.$refs.img[i]
          child.style.width = sliderWidth + 'px'
        }
      },
      _initSlider () {
      },
      imgLoaded () {
        if (!this.checkLoaded) {
          this.$emit('imgLoaded')
          this.checkLoaded = true
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '~common/stylus/variable'
  .my-bullet
    border-radius: 50%
    background: $color-text-l
    display: inline-block
    margin: 0 4px
    width: 8px
    height: 8px
    &.my-bullet-active
      width: 20px
      border-radius: 5px
      background: $color-text-ll
</style>
