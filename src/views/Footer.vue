<template>
  <div class="footer">
    <div class="social">
      <a href="https://github.com/prabhuignoto/nutrivue" target="new">
        <img src="../assets/github.svg" alt="github">
      </a>
      <a href="https://twitter.com/prabhumurthy2" target="new">
        <img src="../assets/twitter.svg" alt="twitter">
      </a>
    </div>
    <a href="mailto:prabhu.m.murthy@gmail.com" target="new">
      Contact
    </a>
    <a href="http://vuejs.org" target="new">
      Powered by Vue.JS
    </a>
    <div class="credit"><span>Designed and Built with</span><img src="../assets/heart.svg" alt="love"></div>
    <div class="copyright">&copy; 2018 Prabhu Murthy</div>
  </div>  
</template>

<script>
export default {
  name: "app-footer"
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #fff;
}
@supports (-ms-accelerator: true) {
  .footer {
    justify-content: space-around;
  }
}
.social {
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30px;
    height: 30px;
    margin: 0 0.5rem;
  }
}
.credit {
  color: #000;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-left: 0.25rem;
  }
}
</style>
