<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import {GET_MIDI_ACCESS} from './store/modules/piano/actions';

const piano = namespace('piano');

@Component
export default class App extends Vue {

  @piano.Action private [GET_MIDI_ACCESS]: any;

  public async mounted() {
      this[GET_MIDI_ACCESS]();
  }
}
</script>
