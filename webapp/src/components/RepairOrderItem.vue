<template>
  <div class="claim">
    <p class="claim-title">Repair Order</p>
    <div class="claim-line">
      <span>Reapir Id:</span>
      <span>{{item.uuid}}</span>
    </div>
    <div class="claim-bot">
      <el-button type="primary" size="mini" @click="repair">Repaired</el-button>
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
    repair(code){
      let ajaxdata = {
        uuid: this.item.uuid,
      }
      this.$axios.post('/repairCompelete', ajaxdata)
        .then(res => {
          if(res.msg == 'success'){
            this.$message({
              message: "Repair compelete.",
              type: 'success'
            })
            this.$emit("repairSuccess")
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
    margin-top: 10px;
    width: 200px;
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