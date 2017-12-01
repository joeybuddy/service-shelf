<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="goPage('settings')">Settings</button>
    </div>
    <button @click="goPage('create')">+</button>
    <my-subscriptions></my-subscriptions>
  </div>
</template>

<script>
import MySubscriptions from "./MySubscriptions.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome!"
    };
  },
  components: {
    "my-subscriptions": MySubscriptions
  },
  methods: {
    goPage(page) {
      let href = "/" + page;
      this.$root.currentRoute = href;
      window.history.pushState(null, page, href);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<style lang="sass">
@import "/style/base.scss";
</style>