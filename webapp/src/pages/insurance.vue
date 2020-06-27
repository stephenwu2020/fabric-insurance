<template>
  <div class="insurance">
    <div class="insurance-list">
      <ClaimItem v-for="item in claims" :key="item.uuid" :item="item"/> 
    </div>
  </div>
</template>

<script>
import ClaimItem from '@/components/ClaimItem.vue'
export default {
  components: { ClaimItem },
  data() {
    return {
      claims: []
    }
  },
  created(){
    this.getClaims()
  },
  methods: {
    getClaims(){
      this.$axios.post('listClaims', {})
        .then(res => {
          if(res.msg == 'success')
            this.claims = res.data
        })
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
  &-list{
    margin: auto;
    overflow-x: auto;
    max-width: 80%;
    display: flex;
  }
}
</style>