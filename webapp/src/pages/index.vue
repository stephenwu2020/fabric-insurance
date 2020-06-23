<template>
  <div class="home">
    <img class="home-logo" src="@/assets/logo.png" alt="">
    <div class="home-hi">Fabric Insurance</div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
