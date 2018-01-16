<template>
  <div class="song-list">
    <ul>
      <li v-for="song in songs" class="item">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      songs: {
        type: Array,
        default: []
      }
    },
    methods: {
      getDesc (song) {
        return `${song.singer}`
      }
    }
  }
</script>

<style scoped>

</style>
