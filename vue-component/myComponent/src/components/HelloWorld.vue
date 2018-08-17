<template>
  <div class="hello">
    <div class="download">
      <button class="app-btn {{installed ? 'app-btn-inst' : ''}}">
        <span class="app-btn-loading {{loading ? '' : 'hide'}}" v-bind:style="{width: loadPercent + '%'}"></span>
        <span class="app-btn-txt" v-text="btnTxt"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .download {

  }
  .app-btn {
    
  }
</style>
