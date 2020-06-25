<template>
  <div class="home">
    <MainIntro />
  </div>
</template>

<script>
import MainIntro from '@/components/MainIntro.vue'
export default {
  name: 'home',
  components: {MainIntro},
  created(){
    this.$axios
      .get('/hello')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>

<style lang="postcss" scoped>
.home{
  &-logo{
    margin-top: 10vh;
    width: 200px;
  }
  &-hi{
    color: green;
  }
}
</style>
