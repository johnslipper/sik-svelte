import type { Artwork } from "../Artwork";
import type { Chord, ChordSection } from "../Chord";

export type Song = {
  id?: string;
  title: string;
  artist?: string;
  artwork?: Artwork;
  album?: string;
  lyrics?: string;
  chordSections?: ChordSection[];
  capoAdjustment?: number;
  stringOffsets?: number[];
};
