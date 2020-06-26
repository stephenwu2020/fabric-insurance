<template>
  <div class="shop">
    <div class="shop-show-wrap">
      <el-carousel ref="carousel" class="shop-show" arrow="always" @change="select" :interval=10000>
        <el-carousel-item v-for="item in products" :key="item.id">
          <div class="shop-item">
            <img :src="getImg(item.id)" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="shop-detail">
      <div class="shop-detail-pair">
        <span>Brand</span>
        <span>{{activeProduct.brand}}</span>
      </div>
      <div class="shop-detail-pair">
        <span>Model</span>
        <span>{{activeProduct.model}}</span>
      </div>
      <div class="shop-detail-pair">
        <span>Desc</span>
        <span>{{activeProduct.description}}</span>
      </div>
      <div class="shop-detail-pair">
        <span>Serial Num</span>
        <span>{{activeProduct.serial_no}}</span>
      </div>
      <div class="shop-detail-pair">
        <span>Price</span>
        <span>{{activeProduct.price}}</span>
      </div>
    </div>
    <el-button class="shop-buy" type="primary" @click="purchase">Purchase</el-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      activeIndex: 0
    }
  },
  computed:{
    ...mapState({
      products: state => state.products
    }),
    activeProduct(){
      return this.products[this.activeIndex]
    }
  },
  mounted() {
      this.$refs.carousel.setActiveItem(0)
  },
  methods: {
    getImg(id){
      return require("@/assets/products/"+this.activeProduct.img)
    },
    select(item){
      this.activeIndex = item
    },
    purchase(){
      this.$router.push("/purchase/"+this.activeProduct.id)
    }
  }
}
</script>

<style lang="postcss" scoped>
.shop{
  padding-bottom: 100px;
  &-show-wrap{
    background: #6d6875;
  }
  &-show{
    margin: auto;
    width: 800px;
    height: 350px;
    background: #6d6875;
  }
  &-item{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img{
      width: 300px;
    }
  }
  &-detail{
    margin: auto;
    padding: 50px 0;
    &-pair{
      display: flex;
      justify-content: center;
      font-size: 20px;
      span:first-child{
        flex: 1;
        text-align: right;
        display: inline-block;
        padding-right: 20px;
        font-weight: bold;
        position: relative;
        &:after{
          position: absolute;
          right: 0;
          content: ":";
        }
      }
      span:nth-child(2){
        flex: 1;
        text-align: left;
        display: inline-block;
        padding-left: 18px;
        font-style: italic;
        color: green;
      }
    }
  }
  &-buy{
    margin-top: 20px;
    width: 300px;
  }
}
</style>