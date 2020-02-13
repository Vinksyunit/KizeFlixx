<template>
  <v-app class="app">
    <v-toolbar class="navContainer">
      <v-toolbar-title class="navTitle">
        <router-link to="/" tag="span" style="cursor: pointer">KizeFlix</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field v-model="searchString"></v-text-field>
      </v-flex>
      <v-btn flat :disabled="!dataAvailable" @click="searchMovie">
        <span class="search">Search</span>
      </v-btn>
    </v-toolbar>

    <v-content class="content">
      <router-view></router-view>
    </v-content>
    <v-footer>
        {{ new Date().getFullYear() }} —
        <strong>Ouahid-Aqodad</strong>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    }
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    }
  }
};
</script>


<style scoped>
.app {
  background: #000000;
  background: -webkit-linear-gradient(to left, #434343, #000000);
  background: linear-gradient(to left, #434343, #000000);
}
.navContainer {
  height: 100px;
  background: #000000;
  background: -webkit-linear-gradient(to left, #e74c3c, #000000);
  background: linear-gradient(to left, #e74c3c, #000000);
}
.content {
  margin-top: 6%;
}
.navTitle {
  color: red;
  font-size: 5rem;
  margin-top: 20px;
  margin-left: 40px;
  font-family: "Bebas Neue", cursive;
}
.search {
  font-size: x-large;
  margin: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

</style>