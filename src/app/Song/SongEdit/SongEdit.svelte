<script lang="ts">
  import SongEditLyrics from "./SongEditLyrics.svelte";
  import { Fieldset, LegendSticky } from "ui/Form";
  import SongEditDetails from "./SongEditDetails.svelte";
  import SongEditChords from "./SongEditChords.svelte";
  import type { Song } from "../index";
  export let song: Song;
  export let errors: { title: string };
</script>

<Fieldset>
  <LegendSticky>Details</LegendSticky>
  <div class="wrapper">
    <SongEditDetails
      bind:title={song.title}
      bind:artist={song.artist}
      bind:album={song.album}
      bind:artwork={song.artwork}
      bind:stringOffsets={song.stringOffsets}
      bind:capoAdjustment={song.capoAdjustment}
      {errors}
    />
  </div>
</Fieldset>
<Fieldset>
  <LegendSticky>
    <div class="titleAction">
      Lyrics <a
        href="https://duckduckgo.com/?q={song.title} {song.artist} {song.album} lyrics"
        target="_blank"
        rel="noopener">Web search</a
      >
    </div>
  </LegendSticky>
  <div class="wrapper">
    <SongEditLyrics bind:lyrics={song.lyrics} />
  </div>
</Fieldset>
<Fieldset>
  <LegendSticky>
    Chords
    {song.capoAdjustment ? `(capo ${song.capoAdjustment})` : ""}
  </LegendSticky>
  <div>
    <SongEditChords
      bind:chordSections={song.chordSections}
      stringOffsets={song.stringOffsets}
      capoAdjustment={song.capoAdjustment}
    />
  </div>
</Fieldset>

<style>
  .wrapper {
    padding: 1rem;
  }

  .titleAction {
    display: flex;
    justify-content: space-between;
  }
  .titleAction a {
    color: var(--primary);
    text-transform: initial;
  }
</style>
