<template>
  <div class="contract">
    <div class="contract-search">
      <el-input  placeholder="Enter username" v-model="username"></el-input>
      <el-button class="contract-search__btn" type="primary" icon="el-icon-search" circle @click="search" />
    </div>
    <div class="contract-list" v-if="contracts.length>0">
      <ContractItem v-for="item in contracts" :key="item.uuid"/>
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
    }
  },
  methods: {
    search(){
      if(!this.username) return
      this.$axios.post("/listContract", {username: this.username})
        .then(res => {
          if(res.msg == 'success'){
            this.contracts = res.data
          }
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
  }
  &-list{
    margin-top: 20px;
  }
}
</style>