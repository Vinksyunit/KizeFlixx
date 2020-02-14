<template>
  <v-container>
    <v-layout style="ba" wrap>
      <v-flex xs12 mr-1 ml-1>
        <div class="description">
          <div class="posterContainer">
            <v-img class="poster" :src="singleMovie.Poster" aspect-ratio="2"></v-img>
          </div>
          <div class="descriptionContainer">
            <v-card>
              <v-card-title class="cardElement" primary-title>
                <h2>{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
                <p>{{ singleMovie.Plot}}</p>
                <h3>Actors:</h3>
                {{singleMovie.Actors}}
                <h4>Awards:</h4>
                {{singleMovie.Awards}}
                <p>Genre: {{singleMovie.Genre}}</p>
              </v-card-title>
              <v-card-actions class="backButton">
                <v-btn @click="back">Back</v-btn>
              </v-card-actions>
            </v-card>
            <v-layout row wrap>
              <v-flex xs12>
                <div class="text-xs-center">
                  <v-dialog v-model="modal" width="800">
                    <v-btn class="ratingsButton" slot="activator">View Ratings</v-btn>
                    <v-card>
                      <v-card-title>Ratings</v-card-title>
                      <v-card-text>
                        <table style="width:100%">
                          <tr>
                            <th>Source</th>
                            <th>Ratings</th>
                          </tr>
                          <tr v-for="(rating,index) in this.ratings" :key="index">
                            <td align="center">{{ratings[index].Source}}</td>
                            <td align="center">
                              <v-rating
                                color="#F57C00"
                                background-color="#FFCC80"
                                :half-increments="true"
                                :value="ratings[index].Value"
                              ></v-rating>
                            </td>
                          </tr>
                        </table>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat @click="modal = false">OK</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";
export default {
  props: ["id"],

  data() {
    return {
      singleMovie: "",
      ratings: "",
      modal: false
    };
  },

  mounted() {
    movieApi

      .fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response;
        this.ratings = this.singleMovie.Ratings;
        this.ratings.forEach(function(element) {
          element.Value = parseFloat(element.Value.split(/\/|%/)[0]);
          element.Value =
            element.Value <= 10 ? element.Value / 2 : element.Value / 20;
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
  justify-content: center;
  max-width: 100%;
  font-family: "Quicksand";
}
.cardElement {
  display: block;
}
.descriptionContainer {
  width: 70%;
}
.description {
  display: flex;
  align-items: center;
}

.posterContainer {
  margin: 15px;
}
.poster {
  width: 22vw;
  height: 60vh;
  margin-top: 10%;
}
.text-xs-center {
  text-align: center;
  margin-top: 10%;
}
.backButton {
  flex-flow: row-reverse;
}
.ratingsButton {
  background-color: transparent !important;
  color: orange;
  font-size: large;
  font-family: "Quicksand";
}
.primary--text {
  color: orange !important;
}
@media screen and (max-width: 860) {
  .posterContainer {
    display: none;
  }
}
</style>