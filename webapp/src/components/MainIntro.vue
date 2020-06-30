<template>
  <div class="intro">
    <div class="intro-left">
      <img class="intro-img" src="@/assets/logo2.png" alt="">
    </div>
    <div class="intro-right">
      <p class="intro-title">Fabric Insurance</p>
      <p class="intro-desc">Life is unpredictable. With the care we provided,</p>
      <p class="intro-desc">life is safety.</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.intro{
  height: 80vh;
  display: flex;
  &-left{
    flex: 1;
    background: #b7e4c7;
  }
  &-right{
    flex: 1;
    background: #faf9f9;
  }
  &-title{
    margin-top: 20%;
    font-size: 40px;
    font-weight: bold;
  }
  &-img{
    margin-top: 50px;
    width: 400px;
  }
}
</style>