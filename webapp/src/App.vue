<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import config from '@/config/config.js'
export default {
  created(){
    this.$store.commit('initProducts', config.products)
    this.getContractType()
  },
  methods: {
    getContractType(){
      this.$axios.post('getContractTypes')
        .then(res => {
          if(res.msg == 'success'){
            const products = res.data
            this.$store.commit('initContractTypes', products)
          }
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1280px;
}
body{
  padding: 0;
  margin: 0;
}
</style>
