const sampleSong = {
  artist: "Green Day",
  artwork: {
    album: "Nimrod",
    artist: "Green Day",
    url:
      "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/f5/5b/e7/f55be77d-b252-49e6-4890-4a063cde42d6/source/100x100bb.jpg",
    title: "Good Riddance (Time of Your Life)",
  },
  album: "Nimrod",
  lyrics:
    "Another turning point, a fork stuck in the road\nTime grabs you by the wrist, directs you where to go\nSo make the best of this test, and don't ask why\nIt's not a question, but a lesson learned in time\n\nIt's something unpredictable, but in the end is right\nI hope you had the time of your life\n\nSo take the photographs, and still frames in your mind\nHang it on a shelf in good health and good time\nTattoos of memories and dead skin on trial\nFor what it's worth it was worth all the while\n\nIt's something unpredictable, but in the end is right\nI hope you had the time of your life\n\nIt's something unpredictable, but in the end is right\nI hope you\nhad the time of your life\n\nIt's something unpredictable, but in the end is right\nI hope you had the time of your life",
  chordSections: [
    {
      chords: [
        { fingering: "2 1 X X 3 4", frets: "3 2 0 0 3 3", name: "G" },
        {
          frets: "X 3 2 0 3 0",
          fingering: "X 2 1 X 4 X",
          name: "C(add9)",
        },
        { name: "D", fingering: "X X X 1 3 2", frets: "X X 0 2 3 2" },
      ],
      title: "Intro/Verse",
    },
    {
      title: "Pre-chorus",
      chords: [
        { name: "Em", frets: "0 2 2 0 0 0", fingering: "X 2 3 X X X" },
        { frets: "X X 0 2 3 2", name: "D", fingering: "X X X 1 3 2" },
        {
          frets: "X 3 2 0 3 0",
          fingering: "X 2 1 X 4 X",
          name: "C(add9)",
        },
        { fingering: "2 1 X X 3 4", frets: "3 2 0 0 3 3", name: "G" },
      ],
    },
    {
      chords: [
        { name: "Em", frets: "0 2 2 0 0 0", fingering: "X 2 3 X X X" },
        { frets: "3 2 0 0 3 3", fingering: "2 1 X X 3 4", name: "G" },
        { frets: "X X 0 2 3 2", fingering: "X X X 1 3 2", name: "D" },
      ],
      title: "Chorus",
    },
  ],
  title: "Good Riddance (Time of Your Life)",
  capoAdjustment: "",
};

export default sampleSong;
