<template>
  <div class="home container">
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
.home {
  background: url(../assets/background.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.home-wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  min-height: 950px;
}
.nutri-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: auto;
  margin-top: auto;
}
.auto-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>
