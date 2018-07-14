import {State} from '@/store/modules/piano/index';
import {ActionContext, ActionTree} from 'vuex';
import {SET_INPUTS} from '@/store/modules/piano/mutations';
import MidiWrapper from '@/wrappers/MidiWrapper';

export const GET_MIDI_ACCESS = 'GET_MIDI_ACCESS';

export default {
    async [GET_MIDI_ACCESS](store: ActionContext<State, any>) {
        store.commit(SET_INPUTS, (await MidiWrapper.requestMidiAccess()).inputs);
    },
} as ActionTree<State, any>;
