<template>
  <div class="layoutdef">
    <div class="layoutdef-header">
      <Header />
    </div>
    <div class="layoutdef-content">
      <router-view /> 
      <p class="layoutdef-foot">© 2020 Fabric Insurance, Inc</p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {Header} 
}
</script>

<style lang="postcss" scoped>
.layoutdef{
  position: relative;
  &-header{
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    height: 50px;
  }
  &-content{
    z-index: 1;
    top: 50px;
    position: relative;
    width: 100%;
  }
  &-foot{
    margin-top: 30px;
  }
}
</style>