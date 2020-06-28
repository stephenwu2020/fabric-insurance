<template>
  <div class="claim">
    <p>{{item.uuid}}</p>
    <p>description: {{item.description}}</p>
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
  p {
    margin: 10px 0;
  }
  &-file{
    margin-top: 10px;
    width: 200px;
  }
  &-bot{
    position: absolute;
    bottom: 20px;
    left: 30px;
    margin-top: 20px;
    .el-button{
      width: 80px;
    }
  }
}
</style>