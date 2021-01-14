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
  import ButtonDefault from "../../ui/Button/ButtonDefault.svelte";
  import Heading from "../../ui/Heading/Heading.svelte";
  
  export let song = {};
  export let isEdit = false;

  function handleDelete() {
    // TODO
  }
</script>

<style>
  .wrapper {
    padding: 1rem;
  }
  .footer {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: var(--neutralLight);
    box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.25)
  }

  .footer :global(button) {
    --buttonColor: var(--danger);
    --buttonBorderColor: var(--danger);
    margin-left: 1rem;
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
  <LegendSticky>
    Chords
    {song.capoAdjustment ? `(capo ${song.capoAdjustment})` : ''}
  </LegendSticky>
  <div>
    <SongEditChords
      chordSections={song.chordSections}
      tuning={song.tuning}
      capoAdjustment={song.capoAdjustment} />
  </div>
  {#if isEdit}
  <div class="footer">
    <Heading text="Actions:" level="2" fontSize="1rem"/>
    <ButtonDefault on:click={handleDelete}>Delete song</ButtonDefault>
  </div>
  {/if}
</Fieldset>
