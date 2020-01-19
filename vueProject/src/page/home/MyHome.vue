<template>
  <el-container>
    <div height="200px;">
        <el-carousel :interval="5000" arrow="always" height="200px" with="100%">
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="../../assets/images/2.jpg" height="200px" width="100%">
          </el-carousel-item>
        </el-carousel>
      <div style="width: 100%;height: 40px;">
        <div style="display: inline-block;width:30%;padding: 3px">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="display: inline-block;width:30%;padding: 3px">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="display: inline-block;width:30%;padding: 3px">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

      </div>
    </div>
      <div>
        <img src="../../assets/logo.png" height="30px" width="30px;">
        <span>山河_约拍</span>
      </div>
      <div class="demo-image__placeholder">
        <div style="margin:0 auto;" >
          <div class="block" style="display: inline-block;width:30%;padding: 3px">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
          <div style="display: inline-block;width: 30%;padding: 3px">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
          <div style="display: inline-block;width: 30%;padding: 3px;">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
        </div>
        <div style="margin:0 auto;" >
          <div class="block" style="display: inline-block;width:30%;padding: 3px">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
          <div style="display: inline-block;width: 30%;padding: 3px">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
          <div style="display: inline-block;width: 30%;padding: 3px;">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
        </div>
        <div style="margin:0 auto;" >
          <div class="block" style="display: inline-block;width:30%;padding: 3px">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
          <div style="display: inline-block;width: 30%;padding: 3px">
            <el-image :src="src" style="height: 100px;"></el-image>
          </div>
          <div style="display: inline-block;width: 30%;padding: 3px;">
            <el-image :src="src"style="height: 100px;"></el-image>
          </div>
        </div>
      </div>
      <div></div>
    <el-footer>Footr</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      src: 'http://img3.imgtn.bdimg.com/it/u=1868469502,895885325&fm=26&gp=0.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    color: #475669;
  }
   .el-footer{
     text-align: center;
     line-height: 100px;
   }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
