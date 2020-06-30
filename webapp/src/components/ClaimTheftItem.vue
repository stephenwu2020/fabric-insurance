<template>
  <div class="claim">
    <p class="claim-title">Theft Claim</p>
    <div class="claim-line">
      <span>Claim Id:</span>
      <span>{{item.uuid}}</span>
    </div>
    <div class="claim-line">
      <span>Description:</span>
      <span>{{item.description}}</span>
    </div>
    <div class="claim-line">
      <span>Reference:</span>
      <el-input class="claim-file" v-model="fileRef" size="mini" type="textarea" />
    </div>
    <div class="claim-bot">
      <el-button type="primary" size="mini" @click="processTheft(true)">Confirm</el-button>
      <el-button type="danger" size="mini" @click="processTheft(false)">Reject</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      fileRef: ''
    }
  },
  computed: {
    getDate(){
      let d = new Date(this.item.date)
      return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    }
  },
  methods: {
    processTheft(code){
      let ajaxdata = {
        uuid: this.item.uuid,
        contract_uuid: this.item.contract_uuid,
        is_theft: code,
        file_reference: this.file
      }
      this.$axios.post('/processTheftClaim', ajaxdata)
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
            type: 'error'
          })
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
    border-bottom: 1px solid #ccc;
    text-align: center;
    font-weight: bold;
  }
  &-line {
    width: 100%;
    padding: 0 10px;
    display: flex;
    margin: 5px 0;
    box-sizing: border-box;
    span{
      flex: 1;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  &-file{
    flex: 1;
    margin-top: 10px;
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
}
</style>