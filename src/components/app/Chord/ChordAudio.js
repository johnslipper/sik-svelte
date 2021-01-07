export class ChordAudio {
  constructor(duration = 1000) {
    this.guitarFretFrequencies = guitarFretFrequencies;

    this.strings = new Array(6); // Six string positions
    this.audioContext; // Audio context
    this.isPlaying; // True while audio playing
    this.duration = duration; // Chord playback duration in ms

    return this.initAudio(); // Initialize the audio context
  }

  /* Create Audio Context */
  initAudio() {
    if (this.audioContext) {
      return false;
    }
    this.audioContext = this.createContext();
    /* Initialise string audio nodes */
    for (var i = 0; i < this.strings.length; i++) {
      this.strings[i] = this.createString(i);
    }
    return this;
  }

  /* Create audio context. NOTE: Includes iOS Sample Rate Fix */
  createContext(desiredSampleRate) {
    var AudioCtor = window.AudioContext || window.webkitAudioContext;

    desiredSampleRate =
      typeof desiredSampleRate === "number" ? desiredSampleRate : 44100;
    var context = new AudioCtor();

    // Check if hack is necessary. Only occurs in iOS6+ devices
    // and only when you first boot the iPhone, or play a audio/video
    // with a different sample rate
    if (
      /(iPhone|iPad)/i.test(navigator.userAgent) &&
      context.sampleRate !== desiredSampleRate
    ) {
      var buffer = context.createBuffer(1, 1, desiredSampleRate);
      var dummy = context.createBufferSource();
      dummy.buffer = buffer;
      dummy.connect(context.destination);
      dummy.start(0);
      dummy.disconnect();

      context.close(); // dispose old context
      context = new AudioCtor();
    }

    return context;
  }

  /* Create a string object with gain/panner */
  createString(i) {
    let string = {
      gainNode: this.audioContext.createGain(),
      panner: this.audioContext.createPanner(),
    };

    var pan = (2 / this.strings.length) * i + 1 - 2;
    string.panner.panningModel = "equalpower";
    string.panner.setPosition(pan, 0, 0);
    string.gainNode.gain.value = 0;
    string.gainNode.gain.toValue = 0.16;

    string.panner.connect(this.audioContext.destination);
    string.gainNode.connect(string.panner);

    return string;
  }

  /* Get frequency from guitar frequency array based on string & fret */
  getFrequency(string, fret) {
    let freq = 0;
    freq = this.guitarFretFrequencies[string][fret];
    return freq;
  }

  /* Start string playing */
  noteOn(note, string) {
    if (!note || !string) return false;

    string.oscillator = this.audioContext.createOscillator();
    string.oscillator.type = "triangle";
    string.oscillator.frequency.value = note;
    string.oscillator.connect(string.gainNode);

    string.oscillator.start(0);
    string.gainNode.gain.value = string.gainNode.gain.toValue;

    window.setTimeout(function () {
      string.gainNode.gain.value = 0; // mute string
    }, this.duration - 50);
    window.setTimeout(this.stopStrings.bind(this), this.duration); // stop oscillator node
  }

  /* Stops and destroys string oscillator node */
  noteOff(string) {
    if (!string) return false;
    if (!string.oscillator) return false;
    string.oscillator.stop(0);
    string.oscillator = null;
  }

  /* Plays a chord from an array of 6 fret positions */
  startStrings(frets) {
    if (this.isPlaying) return false;
    for (var i = 0; i < this.strings.length; i++) {
      if (frets[i] > -1) {
        this.noteOn(this.getFrequency(i, frets[i]), this.strings[i]);
      }
    }
    this.isPlaying = true;
  }

  /* Trigger noteOff() for each string */
  stopStrings() {
    for (var i = 0; i < this.strings.length; i++) {
      this.noteOff(this.strings[i]);
    }
    this.isPlaying = false;
  }

  /* Adjust fret values to compensate for a capo */
  capoAdjust(frets, capo) {
    if (capo > 0) {
      var adjusted = frets.map((fret) => {
        fret = parseInt(fret);
        return fret > -1 ? fret + capo : fret;
      });
      return adjusted;
    } else return frets;
  }

  /* Play frets array and optional capo offset */
  play(frets, capo) {
    if (capo) this.startStrings(this.capoAdjust(frets, parseInt(capo)));
    else this.startStrings(frets);
  }
}

/* Initialise, play and destroy a single chord instance */
export function playChord(frets, duration = 1000) {
  const chordFrets = frets
    .split(" ")
    .map((fret) => (fret === "X" ? undefined : parseInt(fret)));
  if (chordFrets && chordFrets.length) {
    let chordAudio = new ChordAudio(duration);
    chordAudio.play(chordFrets);
    window.setTimeout(() => (chordAudio = null), duration);
  }
}

const guitarFretFrequencies = [
  /* E */ [
    82.41,
    87.31,
    92.5,
    98.0,
    103.8,
    110.0,
    116.5,
    123.5,
    130.8,
    138.6,
    146.8,
    155.6,
    164.8,
    174.6,
    185.0,
    196.0,
    207.7,
    220.0,
    233.1,
    246.9,
    261.6,
  ],
  /* A */ [
    110.0,
    116.5,
    123.5,
    130.8,
    138.6,
    146.8,
    155.6,
    164.8,
    174.6,
    185.0,
    196.0,
    207.7,
    220.0,
    233.1,
    246.9,
    261.6,
    277.2,
    293.7,
    311.1,
    329.6,
    349.2,
  ],
  /* D */ [
    146.8,
    155.6,
    164.8,
    174.6,
    185.0,
    196.0,
    207.7,
    220.0,
    233.1,
    246.9,
    261.6,
    277.2,
    293.7,
    311.1,
    329.6,
    349.2,
    370.0,
    392.0,
    415.3,
    440.0,
    466.2,
  ],
  /* G */ [
    196.0,
    207.7,
    220.0,
    233.1,
    246.9,
    261.6,
    277.2,
    293.7,
    311.1,
    329.6,
    349.2,
    370.0,
    392.0,
    415.3,
    440.0,
    466.2,
    493.9,
    523.3,
    554.4,
    587.3,
    622.3,
  ],
  /* B */ [
    246.9,
    261.6,
    277.2,
    293.7,
    311.1,
    329.6,
    349.2,
    370.0,
    392.0,
    415.3,
    440.0,
    466.2,
    493.9,
    523.3,
    554.4,
    587.3,
    622.3,
    659.3,
    698.5,
    740.0,
    784.0,
  ],
  /* E */ [
    329.6,
    349.2,
    370.0,
    392.0,
    415.3,
    440.0,
    466.2,
    493.9,
    523.3,
    554.4,
    587.3,
    622.3,
    659.3,
    698.5,
    740.0,
    784.0,
    830.6,
    880.0,
    932.3,
    987.8,
    1047,
  ],
];
