<template>
  <div class="header">
    <router-link class="header-logo" to="/">FabINS</router-link>
    <router-link class="header-link" to="/shop">Shop</router-link>
    <router-link class="header-link" to="/contract">Contract</router-link>
    <router-link class="header-link" to="/repair">Repair</router-link>
    <router-link class="header-link" to="/police">Police</router-link>
    <router-link class="header-link" to="/insurance">Insurance</router-link>
  </div>
</template>

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
}
</style>