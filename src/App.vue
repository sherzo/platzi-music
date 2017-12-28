<template lang="pug">
  #app
    p(v-show="showValue") {{ msg }} 
    p(v-if="showValue") {{ msg }}
    p(v-else="showValue") {{ msg }}
    p(v-else-if="showValue") {{ msg }}
  
    ul
      li(v-for="i in items") {{ i }}       
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue!',

      showValue: false,

      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
