import {GetterTree} from 'vuex';
import mutations from './mutations';
import actions from './actions';

export class State {
    public inputs?: WebMidi.MIDIInputMap = undefined;
}

const getters = {} as GetterTree<State, any>;


export default {
    state: new State(),
    getters,
    mutations,
    actions,
    namespaced: true,
};
