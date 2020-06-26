<template>
  <div class="item">
    <p class="item-title">Contract</p>
    <span class="item-line" v-for="count in 7" :key="count"></span>
    <div class="item-sign">
      <div class="item-sign__circle"></div>
      <span class="item-sign__line"></span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.item{
  background-color: #fff;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title{
    font-size: 20px;
    font-weight: bold;
  }
  &-line{
    width: 80%;
    height: 20px;
    margin-top: 10px;
    background: #ccc;
    display: inline-block;
  }
  &-sign{
    width: 80%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &__circle{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #ccc;
    }
    &__line{
      width: 50%;
      height: 10px;
      background: #ccc;
      display: inline-block; 
    }
  }
}
</style>