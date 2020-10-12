<template>
  <div id="app">
    <div id="nav">
      <b-card-header header-tag="nav">
        <b-nav
          card-header
          tabs
          class="border-bottom text-center justify-content-center"
        >
          <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
          <b-nav-item to="/about" exact exact-active-class="active">
            About
          </b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center card-body-element">
        <router-view />
      </b-card-body>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
@import "./src/assets/scss/main";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  a {
    font-weight: bold;
  }
}
</style>
