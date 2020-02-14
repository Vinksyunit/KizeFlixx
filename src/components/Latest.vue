<template>
  <v-container class="allMovies" grid-list-xl>
    <carousel-3d class="carousel">
      <slide :style="{ backgroundImage: `url(${hulk})` }" :index="0">
        <div class="my-2">
          <v-btn
            href="https://www.youtube.com/watch?v=20TeWfV8rL0"
            target="_blank"
            small
            color="#FFAB00"
          >Watch Trailer</v-btn>
        </div>
      </slide>
      <slide :style="{ backgroundImage: `url(${batman})` }" :index="1">
        <div class="my-2">
          <v-btn
            href="https://www.youtube.com/watch?v=neY2xVmOfUM"
            target="_blank"
            small
            color="#FFAB00"
          >Watch Trailer</v-btn>
        </div>
      </slide>
      <slide :style="{ backgroundImage: `url(${superman})` }" :index="2">
        <div class="my-2">
          <v-btn
            href="https://www.youtube.com/watch?v=T6DJcgm3wNY"
            target="_blank"
            small
            color="#FFAB00"
          >Watch Trailer</v-btn>
        </div>
      </slide>
      <slide :style="{ backgroundImage: `url(${thor})` }" :index="3">
        <div class="my-2">
          <v-btn
            href="https://www.youtube.com/watch?v=npvJ9FTgZbM"
            target="_blank"
            small
            color="#FFAB00"
          >Watch Trailer</v-btn>
        </div>
      </slide>
      <slide :style="{ backgroundImage: `url(${spider})` }" :index="4">
        <div class="my-2">
          <v-btn
            href="https://www.youtube.com/watch?v=n9DwoQ7HWvI"
            target="_blank"
            small
            color="#FFAB00"
          >Watch Trailer</v-btn>
        </div>
      </slide>
      <slide :style="{ backgroundImage: `url(${batmanVsSuperman})` }" :index="5">
        <div class="my-2">
          <v-btn
            href="https://www.youtube.com/watch?v=T2U8PyBaTWY"
            target="_blank"
            small
            color="#FFAB00"
          >Watch Trailer</v-btn>
        </div>
      </slide>
    </carousel-3d>

    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in movies" :key="index" mb-2>
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
              <div class="cards">
                <v-btn class="mx-2" dark @click="singleMovie(item.imdbID)">
                  <v-icon dark class="animated infinite heartBeat delay-2s">mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";
import batmanVsSuperman from "../assets/batmanVsSuperman.jpeg";
import batman from "../assets/batman2.jpg";
import superman from "../assets/superman.jpg";
import hulk from "../assets/hulk.jpg";
import thor from "../assets/thor.jpg";
import spider from "../assets/spider.jpg";

export default {
  data() {
    return {
      movies: [],
      batmanVsSuperman,
      batman,
      superman,
      hulk,
      thor,
      spider
    };
  },

  mounted() {
    movieApi.fetchMovieCollection("superman").then(response => {
      this.movies = response.Search;
      console.log(this.movies);
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
.allCards {
  color: white;
  background-color: transparent;
  width: 20vw;
}

.cards :hover {
  background-color: orange;
}
.allMovies {
  margin-bottom: 80px;
  max-width: 80%;
}
.descriptionCard {
  font-family: "Quicksand";
  font-size: 1vw;
}
.justify-center {
  flex-flow: row-reverse;
}
.carousel img {
  height: -webkit-fill-available;
}
.carousel-3d-container.carousel {
  margin-bottom: 120px;
}
a.v-btn {
  float: right;
  font-family: "Quicksand";
  color: white;
  font-weight: bold
}
</style>