<script lang="ts">
  import { fade } from "svelte/transition";
  import ChordVisualised from "./ChordVisualised.svelte";
  import { Button } from "ui/Button";
  import { Form, FormGroup, Input, LabelDefault } from "ui/Form";
  import ChordPreviewPlaceholder from "./ChordPreviewPlaceholder.svelte";
  import ChordEditFieldset from "./ChordEditFieldset.svelte";
  import ChordEditFret from "./ChordEditFret.svelte";
  import ChordEditFinger from "./ChordEditFinger.svelte";
  import ChordPlay from "./ChordPlay.svelte";
  import { Dropdown } from "ui/Dropdown";
  import {
    chordEntriesToArray,
    chordEntriesToString,
    getNotesFromOffsets,
  } from "./helpers";
  import type { Chord, ChordEntry } from "./index";
  export let chord: Chord;
  export let stringOffsets = [0, 0, 0, 0, 0, 0];
  export let capoAdjustment: number = undefined;
  export let onSave: (chord: Chord) => void;
  export let onCancel: () => void;

  let stringCount = 6;
  let frets = chord.frets ? chordEntriesToArray(chord.frets) : [];
  let fingering = chord.fingering ? chordEntriesToArray(chord.fingering) : [];
  let fretsComplete = false;
  let fingeringComplete = false;
  let enablePreview = false;
  const tuning = stringOffsets ? getNotesFromOffsets(stringOffsets) : undefined;
  $: (frets, fingering) && handleEntriesUpdate();

  function handleFretChange(value: ChordEntry, key: number) {
    // TODO: Probably a better way to achieve this
    if (typeof value === "string" || value < 1) {
      fingering[key] = "x";
    }
  }

  function handleEntriesUpdate() {
    enablePreview = false;
    fretsComplete =
      frets.filter((fret) => fret.toString()).length === stringCount;
    fingeringComplete =
      fingering.filter((finger) => finger.toString()).length === stringCount;
    if (fretsComplete && fingeringComplete) {
      handleChordUpdate();
      setTimeout(() => (enablePreview = true));
    }
  }

  function handleChordUpdate() {
    chord.frets = chordEntriesToString(frets);
    chord.fingering = chordEntriesToString(fingering);
  }

  function onSubmit() {
    onSave(chord);
  }
</script>

<div in:fade>
  <Form {onSubmit}>
    <div class="chord">
      <div class="fields">
        <FormGroup>
          <LabelDefault htmlFor="chordEditName">Name</LabelDefault>
          <Input
            id="chordEditName"
            bind:value={chord.name}
            placeholder="e.g. Fmaj7"
          />
        </FormGroup>

        <div class="fieldsets">
          {#each Array(stringCount) as _string, i}
            <ChordEditFieldset string={tuning[i]}>
              <ChordEditFret
                onBlur={handleFretChange}
                bind:value={frets[i]}
                key={i}
                string={tuning[i]}
              />
              <ChordEditFinger
                bind:value={fingering[i]}
                key={i}
                string={tuning[i]}
              />
            </ChordEditFieldset>
          {/each}
        </div>
      </div>
      <div class="preview">
        {#if enablePreview}
          <div class="visualised">
            <Dropdown position="center">
              <ChordVisualised {frets} {fingering} {tuning} />
              <svelte:fragment slot="menu">
                <ChordPlay {chord} {stringOffsets} {capoAdjustment} />
              </svelte:fragment>
            </Dropdown>
          </div>
        {:else}
          <div class="placeholder">
            <ChordPreviewPlaceholder {tuning} />
          </div>
        {/if}
      </div>
    </div>
    <div class="buttons">
      <Button variant="primary" type="submit" disabled={!enablePreview}
        >Save</Button
      >
      <Button variant="default" on:click={onCancel}>Back</Button>
    </div>
  </Form>
</div>

<style>
  .fields {
    display: grid;
    gap: 0.5rem;
  }
  .chord {
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
  }
  .buttons {
    margin-top: 0.5rem;
  }
  .placeholder {
    opacity: 0.5;
  }
  .fieldsets {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    gap: 0.25rem;
  }
  .visualised {
    max-width: 12rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>
