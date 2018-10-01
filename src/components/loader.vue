<template>
  <div class="loader-wrapper">
    <div class="app-loader" />
  </div>
</template>

script <script>
export default {
  name: "loader"
};
</script>

<style lang="scss" scoped>
@keyframes flow {
  0% {
    width: 0%;
    left: 0%;
  }
  50% {
    width: 50%;
    left: 50%;
  }
  100% {
    width: 0%;
    left: 100%;
  }
}
.loader-wrapper {
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0.1rem;
  background: #9dc183;
  left: 0px;

  .app-loader {
    width: 0%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    position: absolute;
    animation-name: flow;
    animation-duration: 2000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}
</style>
