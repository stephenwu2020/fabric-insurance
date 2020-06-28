<template>
  <div class="repair" v-loading="loading">
    <div class="repair-list">
      <RepairOrderItem v-for="item in orders" :key="item.uuid" :item="item" @repairSuccess="repairSuccess"/> 
    </div>
  </div>
</template>

<script>
import RepairOrderItem from '@/components/RepairOrderItem.vue'
export default {
  components: { RepairOrderItem },
  data() {
    return {
      loading: false,
      orders: []
    }
  },
  created(){
    this.getOrders()
  },
  methods: {
    getOrders(){
      this.loading = true
      this.$axios.post('/listRepairOrders')
      .then((res) => {
        if(res.msg == 'success')
          this.orders= res.data
      })
      .finally(() => {
        this.loading = false
      })
    },
    repairSuccess(){
      this.getOrders()
    }
  }
}
</script>


<style lang="postcss" scoped>
.repair{
  min-height: 80vh;
  border: 1px solid #9c89b8;
  background: #9c89b8;
  display: flex;
  align-items: center;
  & >>> .el-loading-mask{
    background: rgba(0, 0, 0, 0.2);
  }
  &-list{
    margin: auto;
    overflow-x: auto;
    max-width: 80%;
    display: flex;
  }
}
</style>