<script>
  import { fade } from "svelte/transition";
  import ChordVisualised from "./ChordVisualised.svelte";
  import { Button } from "../../ui/Button";
  import { Form, FormGroup, Input, LabelDefault } from "../../ui/Form";
  import ChordPreviewPlaceholder from "./ChordPreviewPlaceholder.svelte";
  import ChordEditFieldset from "./ChordEditFieldset.svelte";
  import ChordEditFret from "./ChordEditFret.svelte";
  import ChordEditFinger from "./ChordEditFinger.svelte";
  import ChordPlay from "./ChordPlay.svelte";
  import Dropdown from "../../ui/Dropdown.svelte";
  export let chord;
  export let tuning = "E A D G B E";
  export let capoAdjustment;
  export let onSave;
  export let onCancel;

  let stringCount = 6;
  let frets = chord.frets ? processChordEntries(chord.frets) : [];
  let fingering = chord.fingering ? processChordEntries(chord.fingering) : [];

  $: previewFrets = frets.join(" ").trim();
  $: previewFingerings = fingering.join(" ").trim();
  $: isPreviewPossible =
    frets.filter((fret) => fret.toString().length).length === stringCount;
  $: tuningFormatted = tuning.split(" ");
  $: (previewFrets, previewFingerings) && handleChordUpdate();

  function processChordEntries(entries) {
    return entries.split(" ").map((entry) => {
      return processChordEntry(entry);
    });
  }

  function processChordEntry(entry) {
    return entry === "X" ? entry : parseInt(entry);
  }

  function handleFretChange(value, key) {
    // TODO: Probably a better way to achieve this
    if (typeof value === "string" || value < 1) {
      fingering[key] = "X";
    }
  }

  function handleChordUpdate() {
    chord.frets = previewFrets;
    chord.fingering = previewFingerings;
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
            <ChordEditFieldset string={tuningFormatted[i]}>
              <ChordEditFret
                onBlur={handleFretChange}
                bind:value={frets[i]}
                key={i}
                string={tuningFormatted[i]}
              />
              <ChordEditFinger
                bind:value={fingering[i]}
                fret={frets[i]}
                key={i}
                string={tuningFormatted[i]}
              />
            </ChordEditFieldset>
          {/each}
        </div>
      </div>
      <div class="preview">
        {#if isPreviewPossible}
          <div class="visualised">
            <Dropdown position="center">
              <ChordVisualised
                frets={previewFrets}
                fingering={previewFingerings}
                {tuning}
              />
              <div slot="content">
                <div class="actions" aria-label="Chord actions">
                  <ChordPlay {chord} {tuning} {capoAdjustment} />
                </div>
              </div>
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
      <Button variant="primary" type="submit" disabled={!isPreviewPossible}
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
  .actions :global(button) {
    display: grid;
    gap: 0.5rem;
    justify-items: center;
    padding: 0.75rem;
  }
</style>
