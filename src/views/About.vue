<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import {Vue} from 'vue-property-decorator';
import Component from 'vue-class-component';
import {namespace} from 'vuex-class';
import {GET_MIDI_ACCESS} from '../store/modules/piano/actions';

const piano = namespace('piano');

@Component
export default class About extends Vue {
  @piano.Action private [GET_MIDI_ACCESS]: any;

  public async mounted() {
      this[GET_MIDI_ACCESS]();
  }
}
</script>