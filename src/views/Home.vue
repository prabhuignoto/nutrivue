<template>
  <div class="home container">
    <!-- <img src="../assets/logo.png"> -->
    <div class="home-wrapper">
        <auto-suggest />
      <div class="nutri-wrapper">
        <nutri-card />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AutoSuggest from "@/components/auto-suggest/auto-suggest";
import NutriCard from "@/components/nutri-card/nutri-card";

export default {
  name: "home",
  components: {
    AutoSuggest,
    NutriCard
  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2rem;
}
.nutri-wrapper {
  // width: 35%;
  display: flex;
  align-items: center;
}
.auto-wrapper {
  // width: 45%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  // height: 80vh;
}
</style>
