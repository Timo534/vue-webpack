<template>
  <div class="wrap">
    Hello Webpack
    <img src="@/assets/images/large.jpeg" alt="">
    <img src="./assets/images/large.jpeg" alt="">
    <img src="@/assets/images/small.png" alt="">
    <div class="img"></div>
  </div>
</template>

<script>
  export default {
    name: "App",
    created() {

    }
  }
</script>

<style lang="scss" scoped>
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