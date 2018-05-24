<template>
<v-app id="inspire">
  <v-expansion-panel focusable>
    <v-expansion-panel-content v-for="(s,i) in songs" :key="i">
      <div slot="header">{{ s.parseResult.parsedLines[0][0].directive.value }}</div>
      <v-card>
        <v-card-text class="grey lighten-3">
          <song v-bind:song="s"></song>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-app>
</template>
<script>
import Song from './Song.vue';

const songs = {};

//Load all the songs in the directory
const r = require.context('../assets/songs/', true, /\.cho$/);
r.keys().forEach(k => {
  songs[`${k}`] = r(k);
});


// import {  } from '../../vuex/getters'
// import {  } from '../../vuex/actions'
export default {
  components: {
    Song
  },
  data() {
    return {
      songs: songs
    }
  },
}
</script>
