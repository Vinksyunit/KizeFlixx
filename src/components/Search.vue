<template>
  <v-container class="movieSelect" grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in movieResponse" :key="index" mb-2>
        <v-card class="allCards">
          <v-img :src="item.Poster" aspect-ratio="1.3"></v-img>

          <v-card-title primary-title>
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
  props: ["name"],
  data() {
    return {
      movieResponse: []
    };
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },

    fetchResult(value) {
      movieApi
        .fetchMovieCollection(value)
        .then(response => {
          this.movieResponse = response.Search;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.fetchResult(this.name);
  },
  watch: {
    name(value) {
      this.fetchResult(value);
    }
  }
};
</script>

<style scoped>
.allCards {
  color: white;
  background-color: transparent;
  width: 20vw;
}
.descriptionCard {
  font-family: "Quicksand";
  font-size: 1vw
}
.movieSelect {
  max-width: 80%;
}
.justify-center {
  flex-flow: row-reverse;
}
</style>