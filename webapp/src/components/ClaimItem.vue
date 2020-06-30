<template>
  <div class="claim" v-loading="loading">
    <p class="claim-title">Claim</p>
    <div class="claim-line">
      <span>Claim Id:</span>
      <span class="claim-id">{{item.uuid}}</span>
    </div>
    <div class="claim-line">
      <span>Description:</span>
      <span class="claim-desc">{{item.description}}</span>
    </div>
    <div class="claim-line">
      <span>Is Theft:</span>
      <i v-if="item.is_theft" class="el-icon-circle-check" style="color:green"></i>
      <i v-else class="el-icon-circle-close" style="color:red"></i>
    </div>
    <div class="claim-line">
      <span>Reimbursable:</span>
      <span>{{item.reimbursable}}</span>
    </div>
    <div class="claim-line">
      <span>Repair:</span>
      <i v-if="item.repaired" class="el-icon-circle-check" style="color:green"></i>
      <i v-else class="el-icon-circle-close" style="color:red"></i>
    </div>
    <div class="claim-line">
      <span>Date:</span>
      <span>{{getDate}}</span>
    </div>
    <div class="claim-line">
      <span>Status:</span>
      <span>{{item.status}}</span>
    </div>
    <div class="claim-bot">
      <el-button v-if="!item.is_theft" type="primary" size="mini" @click="process('R')">Repair</el-button>
      <el-button type="success" size="mini" @click="process('F')">Reimburse</el-button>
      <el-button type="danger" size="mini" @click="process('J')">Reject</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      loading: false
    }
  },
  computed: {
    getDate(){
      let d = new Date(this.item.date)
      return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    }
  },
  methods: {
    process(code){
      if(this.item.status == 'N' && this.item.is_theft){
        this.$message({
          message: "Theft claim must confirm by police first!",
          type: "warning"
        })
        return
      }

      let ajaxdata = {
        uuid: this.item.uuid,
        contract_uuid: this.item.contract_uuid,
        status: code,
        reimbursable: 0
      }
      this.loading = true
      this.$axios.post('/processClaim', ajaxdata)
        .then(res => {
          if(res.msg == 'success'){
            this.$message({
              message: "This claim has been processed.",
              type: 'success'
            })
            this.$emit("claimSuccess")
          }
        })
        .catch(err => {
          this.$message({
            message: err.message,
            type: 'error',
          })
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="postcss" scoped>
.claim{
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 400px;
  margin: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  &-title{
    width: 100%;
    text-align: center !important;
    display: block !important;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
  }
  &-id,&-desc{
    display: inline-block;
    width: 150px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  &-line {
    width: 100%;
    padding: 0 10px;
    display: flex;
    margin: 5px 0;
    box-sizing: border-box;
    span, i{
      flex: 1;
    }
  }
  &-bot{
    padding: 10px;
    border-top: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    display: flex;
    justify-content: flex-start;
    .el-button{
      width: 80px;
    }
  }
  & >>> .el-loading-mask{
    border-radius: 20px;
  }
}
</style>