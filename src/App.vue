<template>
  <div id="app text-center">
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
  name: "App"
};
</script>

<style lang="scss">
@import "./src/assets/scss/main";
</style>
