<template>
  <div class="insurance" v-loading="loading">
    <div class="insurance-list">
      <ClaimItem v-for="item in claims" :key="item.uuid" :item="item" @claimSuccess="claimSuccess"/> 
    </div>
  </div>
</template>

<script>
import ClaimItem from '@/components/ClaimItem.vue'
export default {
  components: { ClaimItem },
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
      Promise.all([
        this.$axios.post('/listClaims', {status: 'N'}),
        this.$axios.post('/listClaims', {status: 'P'})
      ])
      .then(([resNew, resTheft]) => {
        if(resNew.msg == 'success')
          newClaims = resNew.data
        if(resTheft.msg == 'success')
          theftConfirmClaims = resTheft.data
        this.claims = newClaims.concat(theftConfirmClaims)
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
.insurance{
  min-height: 80vh;
  border: 1px solid #90be6d;
  background: #90be6d;
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