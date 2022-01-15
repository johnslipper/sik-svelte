declare module "vexchords" {
  type ChordBoxParameters = {
    numStrings: number;
    numFrets: number;
    x: number;
    y: number;
    width: number;
    height: number;
    strokeWidth: number;
    showTuning: true;
    defaultColor: string;
    bgColor: string;
    labelColor: string;
    fontFamily: string;
    fontSize: undefined;
    fontStyle: string;
    fontWeight: string;
    labelWeight: string;
  };

  type Note = number[];
  type DrawParameters = {
    chord: Note[];
    position: number;
    positionText: number;
    barres: Array;
    tuning: string[];
  };

  export class ChordBox {
    constructor(sel: Element, params: Partial<ChordBoxParameters>);
    draw(parameters: DrawParameters);
  }
}
