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
      lasName: '',
      birthDate: ''
    }
  },

  computed: {
    fullName () {
      return this.name + ' ' + this.lasName
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
