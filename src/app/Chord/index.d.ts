export type ChordEntry = string | number;

export type Chord = {
  fingering?: string;
  frets?: string;
  name?: string;
  position?: number;
};

export type ChordSection = {
  chords?: Chord[];
  title?: string;
};
