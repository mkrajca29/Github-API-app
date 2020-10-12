<template>
  <div id="app">
    <div id="nav">
      <b-card-header header-tag="nav">
        <b-nav card-header tabs class="text-center">
          <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
          <b-nav-item to="/about" exact exact-active-class="active">
            About
          </b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center card-body-element">
        <router-view />
      </b-card-body>

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul {
  margin: 5px;
  padding: 0;
  li {
    list-style-type: none;
  }
}
</style>
