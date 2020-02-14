<template>
  <v-app class="app">
    <v-toolbar class="navContainer">
      <v-toolbar-title class="navTitle">
        <router-link to="/" tag="span" style="cursor: pointer" class="animated fadeInLeft delay-1s">KizeFlix</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field color="black" v-model="searchString"></v-text-field>
      </v-flex>
      <v-btn flat :disabled="!dataAvailable" @click="searchMovie">
        <span class="search">Search</span>
      </v-btn>
    </v-toolbar>

    <v-content class="content">
      <router-view></router-view>
    </v-content>
    <v-card class="footer">
      <v-divider></v-divider>
      <div>
        <a href="https://github.com/ako180991" target="_blank">
          <img class="github" src="./assets/github.png" width="50vw" />
        </a>
        <a href="https://www.linkedin.com/in/oaqodad/" target="_blank">
          <img class="linkedin" src="./assets/linkedin.png" width="50vw" />
        </a>
      </div>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Ouahid - KizeFlix</strong>
      </v-card-text>
    </v-card>
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
  background: #ba8b02;
  background: -webkit-linear-gradient(to right, #181818, #ba8b02);
  background: linear-gradient(to right, #181818, #ba8b02);
}
.content {
  margin-top: 6%;
}
.navTitle {
  color: orange;
  font-size: 5vw;
  margin-top: 20px;
  margin-left: 40px;
  font-family: "Bebas Neue", cursive;
}
.search {
  font-size: 2vw;
  margin: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: black;
}
.v-input{
  font-size: 2vw;
  font-family: "Quicksand"
}
.footer {
  background: #ba8b02;
  background: -webkit-linear-gradient(to right, #181818, #ba8b02);
  background: linear-gradient(to right, #181818, #ba8b02);
  height: 150px;
  text-align: center;
}
.github {
  margin: 15px;
}
.linkedin {
  margin: 15px;
}

@media (min-width: 0){

.flex.xs12 {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 20%;
}
}
</style>