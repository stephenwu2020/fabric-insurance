<template>
  <div class="item">
    <p class="item-title">Contract</p>
    <p class="item-id">{{this.item.uuid}}</p>
    <span class="item-line" v-for="count in 7" :key="count"></span>
    <div class="item-sign">
      <div class="item-sign__circle"></div>
      <div class="item-sign-right">
        <el-button type="primary" size="mini" round @click="claim">Claim</el-button>
        <span class="item-sign-right__line"></span>
      </div>
    </div>
    <el-dialog title="Create a Claim" 
      :visible.sync="dialogFormVisible" 
      :append-to-body="true" 
      width="500px">
      <el-form :model="form" :label-width="formLabelWidth" v-loading="loading">
        <el-form-item label="Contract UUID:">
          <el-input v-model="item.uuid" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Is Theft:">
          <el-switch v-model="form.is_theft"></el-switch>
        </el-form-item>
        <el-form-item label="Description:">
          <el-input v-model="form.description" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: false,
      form: {
        is_theft: false,
        description: '',
      }
    }
  },
  methods: {
    claim(){
      this.dialogFormVisible = true
    },
    confirm(){
      if(!this.form.description){
        this.$message({
          message: 'Please full fill the form.',
          type: 'warning'
        });
        return
      }
      this.loading = true
      let ajaxdata = {}
      Object.assign(ajaxdata, this.form)
      ajaxdata.contract_uuid = this.item.uuid
      this.$axios.post('/fileClaim', ajaxdata)
        .then(res => {
          if(res.msg == 'success'){
            this.$message({
              message: "Claim Success!",
              type: 'success'
            })
          }
          this.hideDialog()
        })
        .finally(() => {
          this.loading = false
        })
    },
    hideDialog() {
      this.dialogFormVisible = false
      this.loading = false
      this.form.is_theft = false
      this.form.description = ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.item{
  flex-shrink: 0;
  margin: 5px 20px;
  padding: 10px 0;
  background-color: #fff;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  &-id{
    max-width: 80%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  &-title{
    font-size: 20px;
    font-weight: bold;
  }
  &-line{
    width: 80%;
    height: 20px;
    margin-top: 10px;
    background: #ccc;
    display: inline-block;
  }
  &-sign{
    width: 80%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &-right{
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &__line{
        margin-top: 10px;
        width: 90%;
        height: 10px;
        background: #ccc;
        display: inline-block; 
      }
    }
    &__circle{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #ccc;
    }
  }
}
</style>