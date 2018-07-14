export default class MidiWrapper {

    public static async requestMidiAccess(): Promise<WebMidi.MIDIAccess> {
        return navigator.requestMIDIAccess();
    }

}
