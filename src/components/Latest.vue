<template>
  <v-container class="allMovies" grid-list-xl>

    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in movies" :key="index" mb-2>
        <v-card class="allCards">
          <v-img :src="item.Poster" aspect-ratio="1.3"></v-img>

          <v-card-title class="allCards" primary-title>
            <div class="descriptionCard">
              <h2>{{item.Title}}</h2>
              <div>{{item.Year}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <div class="text-center">
              <v-btn class="mx-2" dark @click="singleMovie(item.imdbID)">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </div>
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
      movies: [],
    };
  },

  mounted() {
    movieApi
      .fetchMovieCollection("superman")
      .then(response => {
        this.movies = response.Search;
        console.log(this.movies);
      })
  },

  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  }
};
</script>

<style scoped>
.allCards{
  color: white;
  background-color: transparent
}
.allMovies {
  margin-bottom: 80px;
  max-width: 80%;
}
.descriptionCard {
  font-family: "Quicksand";
}
.justify-center {
  flex-flow: row-reverse;
}
</style>