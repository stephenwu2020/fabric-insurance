<template>
  <div class="purchase">
    <div class="purchase-product">
      <img :src="getImg()" alt="">
    </div>
    <div class="purchase-form">
      <el-form ref="form" :model="formdata" label-width="120px" v-loading="loading">
        <el-form-item label="First Name:">
          <el-input v-model="formdata.first_name"></el-input>
        </el-form-item>
        <el-form-item label="Last Name:">
          <el-input v-model="formdata.last_name"></el-input>
        </el-form-item>
        <el-form-item label="Username:">
          <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="Password:">
          <el-input v-model="formdata.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Activity Date:">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="Pick a date" v-model="formdata.start_date" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker placeholder="Pick a time" v-model="formdata.end_date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="">
          <el-button class="purchase-form__submit" type="primary" @click="submit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      formdata: {
        contract_type_uuid: '',
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        start_date: '',
        end_date: '',
      },
      loading: false
    }
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    activeId(){
      return this.$route.params.id
    },
    activeProduct(){
      const product = this.products.find(pro => {
        return pro.id === this.activeId
      })
      return product
    }
  },
  created(){
    console.log("product id:", this.$route.params.id)
  },
  methods: {
    getImg(){
      return require("@/assets/products/"+this.activeProduct.img)
    },
    parseDate(s){
      let ts=0
      if(s){
        ts =  new Date(s).getTime()/1000
      }else{
        ts = new Date().getTime()/1000
      }
      return ts.toFixed(0)
    },
    submit(){
      let requestData = {}
      Object.assign(requestData, this.formdata)
      requestData.contract_type_uuid = '63ef076a-33a1-41d2-a9bc-2777505b014f'
      requestData.start_date = this.parseDate(requestData.start_date)
      requestData.end_date = this.parseDate(requestData.end_date)
      requestData.item = {}
      Object.assign(requestData.item, this.activeProduct)
      requestData.item.id = Number(requestData.item.id)
      requestData.item.price = Number(requestData.item.price)

      this.loading = true
      this.$axios.post('/createContract', requestData)
        .then(res => {
          if(res.msg == 'success'){
            this.$alert('Purchase Success!', 'Congratulation', {
              confirmButtonText: 'OK',
              showClose: false,
              callback: action => {
                this.$router.push("/shop")
              }
            })
          }
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="postcss" scoped>
.purchase{
  display: flex;
  &-product{
    flex: 1;
    background: #2a9d8f;
    display: flex;
    align-items: center;
    img{
      max-width: 90%;
    }
  }
  &-form{
    flex: 1;
    .el-form{
      box-shadow: 0px 0px 2px 1px #ccc;
      width: 500px;
      margin: 20px auto;
      padding: 20px;
    }
    &__submit{
      float: left;
    }
  }
}
</style>