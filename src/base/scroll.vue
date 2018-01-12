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
        iscroll: null
      }
    },
    methods: {
      _initScroll () {
        let wrapperDom = this.$refs.wrapper
        /* eslint-disable no-new */
        this.iscroll = new BetterScroll(wrapperDom, {
          probeType: this.probeType,
          click: this.click
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    refresh () {
      this.iscroll.refresh()
    }
  }
</script>

<style lang="stylus" scoped>

</style>
