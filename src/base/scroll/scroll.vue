<template>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  export default {
    data () {
      return {
        scroll: null
      }
    },
    methods: {
      _initScroll () {
        let wrapperDom = this.$refs.wrapper
        /* eslint-disable no-new */
        this.scroll = new BetterScroll(wrapperDom, {
          probeType: this.probeType,
          click: this.click
        })
        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
      },
      refresh () {
        this.scroll.refresh()
      },
      scrollTo (...arg) {
        this.scroll && this.scroll.scrollTo(...arg)
      },
      scrollToElement (...arg) {
        this.scroll && this.scroll.scrollToElement(...arg)
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    props: {
      data: {
        type: Array,
        default: null
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      probeType: {
        type: Number,
        default: 1
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
