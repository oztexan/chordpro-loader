<template>
<div>
  <span v-html="song.html">{{song.html}}</span>
</div>
</template>

<script>
// import {  } from '../../vuex/getters'
// import {  } from '../../vuex/actions'
export default {
  /*
  vuex: {
        getters: {
        },
        actions: {
        }
    },
    data () {
        return {
        }
    },
  */
  props: {
    song: {
      type: Object,
      validator: function(value) {
        return value.html && value.parseResult;
      }
    }
  }
  /*
  watch: {
  },
  computed: {
  },
  methods: {
  },
  events: {
  },
  ready () {
  },
  components: {
  }
  */
}
</script>

<style>
.song-title {
  font-size: x-large;
  font-weight: bold;
}

.song-subtitle {
  font-size: large;
  font-weight: bold;
}

.song-lyrics {
  white-space: pre;
  display: block;
  /* display: none; */
}

.song-lyrics-whitespace {
  font-family: monospace;
  display: inline-block;
  /* display: none; */
}

.song-line {
  overflow: auto;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
}

.song-linesegment {
  display: inline-block;
}

.song-chord {
  font-weight: bold;
  white-space: pre;
  display: block;
}

.song-chord-nolyrics {
  font-weight: bold;
  white-space: pre;
  display: inline-block;
}

.song-comment {
  background: lightgray;
  margin: 10px;
}

.song-soc {
  padding-left: 10px;
  position: relative;
}

.song-soc:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 3px;
  bottom: 3px;
  left: 0%;
  border-left: 7px solid gray;
}

.song-sot {
  font-family: monospace;
}

.song-soh {
  padding-left: 10px;
  position: relative;
}

.song-soh:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 3px;
  bottom: 3px;
  left: 0%;
  border-left: 7px solid red;
}
</style>
