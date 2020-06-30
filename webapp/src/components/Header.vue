<template>
  <div class="header">
    <router-link class="header-logo" to="/">FabINS</router-link>
    <router-link class="header-link" to="/shop" :class="{'header-active': activeTab=='shop'}">Shop</router-link>
    <router-link class="header-link" to="/contract" :class="{'header-active': activeTab=='contract'}">Contract</router-link>
    <router-link class="header-link" to="/repair" :class="{'header-active': activeTab=='repair'}">Repair</router-link>
    <router-link class="header-link" to="/police" :class="{'header-active': activeTab=='police'}">Police</router-link>
    <router-link class="header-link" to="/insurance" :class="{'header-active': activeTab=='insurance'}">Insurance</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'contract'
    }
  },
  watch: {
    '$route': 'onRouteChange'
  },
  created(){
    this.onRouteChange()
  },
  methods: {
    onRouteChange(){
      let pathArr = this.$route.path.split('/')
      this.activeTab = pathArr[1]
    }
  }
}
</script>

<style lang="postcss" scoped>
.header{
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  &-logo,&-link{
    text-decoration: none;
    padding: 0 20px;
    cursor: pointer;
    user-select: none;
    color: #333;
  }
  &-logo{
    font-weight: bolder;
    padding: 0 40px;
    font-size: 24px;
  }
  &-active{
    position: relative;
    &:after{
      position: absolute;
      bottom: -15px;
      left: 10%;
      right: 10%;
      content: '';
      height: 5px;
      background: #3a86ff;
    }
  }
}
</style>