<template lang="pug">
  #app
    input(v-model="name")     
    input(v-model="lasName")
  
    p {{ fullName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lasName: ''
    }
  },

  computed: {
    fullName () {
      return this.name + ' ' + this.lasName
    }
  },

  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
