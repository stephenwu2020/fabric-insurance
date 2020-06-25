<template>
  <div class="header">
    <div class="header-logo">FabINS</div>
    <div class="header-link">Shop</div>
    <div class="header-link">Repair</div>
    <div class="header-link">Police</div>
    <div class="header-link">Insurance</div>
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
    padding: 0 20px;
    cursor: pointer;
    user-select: none;
  }
  &-logo{
    font-weight: bolder;
    padding: 0 40px;
    font-size: 24px;
  }
}
</style>