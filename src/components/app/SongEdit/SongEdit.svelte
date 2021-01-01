<script>
  import { fade } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Label, Textarea, Fieldset, Legend } from "../../ui/Form";
  import SongEditDetails from "./SongEditDetails.svelte";
  import SongEditChords from "./SongEditChords.svelte";
  export let song = {
    title: "",
    artist: "",
    album: "",
    lyrics: "",
    tuning: "",
    chordSections: [],
  };
</script>

<style>
  .wrapper {
    padding: 1rem;
  }
</style>

<Fieldset>
  <Legend>Details</Legend>
  <div class="wrapper" in:fade>
    <SongEditDetails
      title={song.title}
      artist={song.artist}
      album={song.album}
      artwork={song.artwork}
      tuning={song.tuning} />
  </div>
</Fieldset>
<Fieldset>
  <Legend>Lyrics</Legend>
  <div class="wrapper" in:fade>
    <VisuallyHidden>
      <Label htmlFor="songLyrics">Lyrics</Label>
    </VisuallyHidden>
    <Textarea id="songLyrics" bind:value={song.lyrics} />
  </div>
</Fieldset>
<Fieldset>
  <Legend>Chords</Legend>
  <div in:fade>
    <SongEditChords chordSections={song.chordSections} tuning={song.tuning} />
  </div>
</Fieldset>
