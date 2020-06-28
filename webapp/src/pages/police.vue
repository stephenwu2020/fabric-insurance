<template>
  <div class="pol" v-loading="loading">
    <div class="pol-list">
      <ClaimTheftItem v-for="item in claims" :key="item.uuid" :item="item" @claimSuccess="claimSuccess"/> 
    </div>
  </div>
</template>

<script>
import ClaimTheftItem from '@/components/ClaimTheftItem.vue'
export default {
  components: { ClaimTheftItem },
  data() {
    return {
      loading: false,
      claims: []
    }
  },
  created(){
    this.getClaims()
  },
  methods: {
    getClaims(){
      let newClaims = []
      let theftConfirmClaims = []
      this.loading = true
      this.$axios.post('/listTheftClaims')
        .then((res) => {
          if(res.msg == 'success')
            this.claims = res.data
        })
        .finally(() => {
          this.loading = false
        })
    },
    claimSuccess(){
      this.getClaims()
    }
  }
}
</script>


<style lang="postcss" scoped>
.pol{
  min-height: 80vh;
  border: 1px solid #023e8a;
  background: #023e8a;
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