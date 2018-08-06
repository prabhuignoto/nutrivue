<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <div class="logo">
        <img src="./assets/plant.svg" class="logo-img">
        <h2>Nutrivue</h2>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 1rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  border-bottom: 2px solid #ccc;
}

.logo {
  margin-left: auto;
  font-size: 2rem;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #9dc183;
  font-size: 1.5rem;
  margin-right: 1rem;
}

#nav a.router-link-exact-active {
  color: #9dc183;
}

body {
  background: #fff;
}

.logo-img {
  width: 35px;
  height: 35px;
  margin-right: 0.25rem;
}
</style>
