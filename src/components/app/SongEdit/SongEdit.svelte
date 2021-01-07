<script>
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import {
    LabelDefault,
    Textarea,
    Fieldset,
    LegendSticky,
  } from "../../ui/Form";
  import SongEditDetails from "./SongEditDetails.svelte";
  import SongEditChords from "./SongEditChords.svelte";
  export let song = {};
</script>

<style>
  .wrapper {
    padding: 1rem;
  }
</style>

<Fieldset>
  <LegendSticky>Details</LegendSticky>
  <div class="wrapper">
    <SongEditDetails
      bind:title={song.title}
      bind:artist={song.artist}
      bind:album={song.album}
      bind:artwork={song.artwork}
      bind:tuning={song.tuning}
      bind:capoAdjustment={song.capoAdjustment} />
  </div>
</Fieldset>
<Fieldset>
  <LegendSticky>Lyrics</LegendSticky>
  <div class="wrapper">
    <VisuallyHidden>
      <LabelDefault htmlFor="songLyrics">Lyrics</LabelDefault>
    </VisuallyHidden>
    <Textarea id="songLyrics" bind:value={song.lyrics} />
  </div>
</Fieldset>
<Fieldset>
  <LegendSticky>Chords</LegendSticky>
  <div>
    <SongEditChords
      chordSections={song.chordSections}
      tuning={song.tuning}
      capoAdjustment={song.capoAdjustment} />
  </div>
</Fieldset>
