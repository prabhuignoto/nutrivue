<template>
  <div class="nutri-card-wrapper" v-if="items.length > 0">
    <loader v-if="isLoading"/>
    <!-- <header class="title">{{name}}</header> -->
    <div class="content-wrapper columns is-centered is-multiline">
      <div class="primary-attributes-wrapper column is-12-mobile is-6-tablet is-6-desktop">
        <ul class="primary-attributes">
          <li class="attribute-head">Nutrition Facts</li>
          <li v-for="item in items" :key="item.name" class="attribute">
            <span class="attr-column name">{{item.displayName}}</span><span class="attr-column value">{{item.value}}</span>
          </li>
        </ul>
      </div>
      <div class="img-wrapper column is-12-mobile is-6-tablet is-5-desktop">
        <img :src="photo.highres" class="img" />
      </div>
    </div>
  </div>  
</template>

<script>
import { mapState } from "vuex";
import Loader from "../loader";

export default {
  name: "nutri-card",
  components: {
    Loader
  },
  computed: {
    ...mapState({
      items: ({ details }) => details.data.primaryAttributes,
      name: ({ details }) => details.data.foodName,
      photo: ({ details }) => details.data.photo,
      isLoading: ({ details }) => details.searchInProgress
    })
  }
};
</script>

<style lang="scss" scoped>
.nutri-card-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  background: transparent;
  /* min-height: 70vh; */
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 1rem;
  border-radius: 4px;
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.img-wrapper {
  height: 500px;
  /* width: 70%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 2rem; */

  .img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 3px;
  }
}

.title {
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  padding: 0.4rem;
  text-align: left;
  color: #000;
  width: 100%;
  margin-top: 1rem;
  // margin-left: 2rem;
}

.primary-attributes-wrapper {
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  flex-direction: column;
  // background: rgba()
  position: relative;

  .primary-attributes {
    list-style: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    background: #fff;
    justify-content: center;
    border-radius: 5px;

    .attribute-head {
      height: 55px;
      line-height: 55px;
      background: #000;
      color: #fff;
      font-size: 1.5rem;
      border-radius: 3px;
      font-family: "Roboto";
      margin-bottom: 1rem;
      width: 100%;
      text-align: left;
      padding-left: 1rem;
    }
    .attribute {
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .attr-column {
      display: flex;
      flex-basis: 50%;
      font-family: "Roboto", sans-serif;
      &.name {
        display: block;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.75);
        text-align: right;
      }
      &.value {
        display: block;
        font-size: 1.1rem;
        font-weight: 700;
        color: #000;
        text-align: center;
      }
    }
  }
}
</style>
