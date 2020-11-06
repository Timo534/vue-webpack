<template>
  <div class="wrap">
    Hello Webpack from Learn
    <div>
      <img src="@/assets/images/large.jpeg" alt="">
    </div>
    <div>
      0
      <img src="@/assets/images/small.png" alt="">
    </div>
    <div class="img"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { func1 } from '@/assets/util'
export default Vue.extend({
  name: 'App',
  created () {
    console.log('App')
    func1()
  }
})
</script>

<style lang="scss" scoped>
  @import "../assets/css/style";
  :root {
    --red: #d33;
  }
  .wrap {
    color: var(--red);
    .img {
      display: flex;
      width: 30px;
      height: 30px;
      background: url(~@/assets/images/large.jpeg) no-repeat;
    }
  }
</style>
