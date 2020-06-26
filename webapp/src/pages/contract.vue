<template>
  <div class="contract">
    <div class="contract-search">
      <el-input  placeholder="Enter username" v-model="username" @keyup.enter.native="search"></el-input>
      <el-button 
        v-show="!loading"
        class="contract-search__btn" 
        type="primary" 
        icon="el-icon-search" 
        circle 
        @click="search" />
       <div class="contract-search__loading">
        <i v-show="loading" class="el-icon-loading"></i> 
       </div>
    </div>
    <div class="contract-list" v-if="contracts.length>0">
      <ContractItem v-for="item in contracts" :key="item.uuid" :item="item"/>
    </div>
  </div>
</template>

<script>
import ContractItem from '@/components/ContractItem.vue'
export default {
  components: { ContractItem },
  data(){
    return {
      username: '',
      contracts: [],
      loading: false
    }
  },
  created(){
    if(this.$route.query.username){
      this.username = this.$route.query.username
      this.search()
    }
  },
  methods: {
    search(){
      if(!this.username || this.loading) return
      this.loading = true
      this.$axios.post("/listContract", {username: this.username})
        .then(res => {
          if(res.msg == 'success'){
            this.contracts = res.data
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="postcss" scoped>
.contract{
  min-height: 80vh;
  background: #ffd166;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-search{
    justify-content: center;
    display: flex;
    .el-input{
      width: 300px;
    }
    &__btn{
      margin-left: 10px;
    }
    &__loading{
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
    }
  }
  &-list{
    display: flex;
    margin-top: 20px;
    width: 60%;
    overflow-x: auto;
  }
}
</style>