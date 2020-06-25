<template>
  <div class="shop">
    <div class="shop-show-wrap">
      <el-carousel ref="carousel" class="shop-show" arrow="always" @change="select" interval="10000">
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
    <el-button class="shop-buy" type="primary" >Purchase</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      products : [
        {id: "101", brand: "KIJ", model: "Sport", price: "2000$", description: "Sport Model", serial_no: "sn101"},
        {id: "102", brand: "KIJ", model: "Premuim", price: "4000$", description: "Premuim Model", serial_no: "sn102"},
        {id: "201", brand: "OHI", model: "Basic", price: "2000$", description: "Basic Model", serial_no: "sn201"},
        {id: "202", brand: "OHI", model: "High", price: "4000$", description: "High Model", serial_no: "sn201"},
        {id: "301", brand: "MJO", model: "Fire", price: "2000$", description: "Fire Model", serial_no: "sn301"},
        {id: "302", brand: "MJO", model: "Ice", price: "2000$", description: "Ice Model", serial_no: "sn301"},
      ],
      imgMap: {
        "101": "p01.png",
        "102": "p01.png",
        "201": "p02.png",
        "202": "p02.png",
        "301": "p01.png",
        "302": "p01.png",
      },
      activeIndex: 0
    }
  },
  computed:{
    activeProduct(){
      return this.products[this.activeIndex]
    }
  },
  mounted() {
      this.$refs.carousel.setActiveItem(0)
  },
  methods: {
    getImg(id){
      return require("@/assets/products/"+this.imgMap[id])
    },
    select(item){
      this.activeIndex = item
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