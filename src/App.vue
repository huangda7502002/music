<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from './components/m-header/m-header.vue'
  import Tab from './components/tab/tab.vue'
  import Recommend from './components/recommend/recommend'
  import Singer from './components/singer/singer'
  import Rank from './components/rank/rank'
  import Search from './components/search/search'

  export default {
    components: {
      Tab, MHeader, Recommend, Singer, Rank, Search
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    color: $color-theme
</style>
