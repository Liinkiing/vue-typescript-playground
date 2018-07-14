import {State} from '@/store/modules/piano/index';
import {MutationTree} from 'vuex';

export const SET_INPUTS = 'SET_INPUTS';

export default {
    [SET_INPUTS](state: State, inputs: WebMidi.MIDIInputMap) {
        state.inputs = inputs;
    },
} as MutationTree<State>;
