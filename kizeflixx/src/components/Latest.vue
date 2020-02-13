<template>
  <v-container class="allMovies" grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in movies" :key="index" mb-2>
        <v-card>
          <v-img :src="item.Poster" aspect-ratio="1.3"></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{item.Title}}</h2>
              <div>{{item.Year}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn @click="singleMovie(item.imdbID)">Plus</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";

export default {
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    movieApi
      .fetchMovieCollection("batman")
      .then(response => {
        this.movies = response.Search;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  }
};
</script>

<style scoped>
.allMovies {
  mix-blend-mode: color-dodge;
}
</style>