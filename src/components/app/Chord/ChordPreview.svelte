<script>
  import { fade } from "svelte/transition";
  import ChordVisualised from "./ChordVisualised.svelte";
  import { ButtonPrimary, ButtonDefault } from "../../ui/Button";
  import { Form, FormGroup, Input, LabelDefault } from "../../ui/Form";
  import ChordPreviewPlaceholder from "./ChordPreviewPlaceholder.svelte";
  import ChordEditFieldset from "./ChordEditFieldset.svelte";
  import ChordEditFret from "./ChordEditFret.svelte";
  import ChordEditFinger from "./ChordEditFinger.svelte";
  export let chord;
  export let tuning = "E A D G B E";
  export let onSave;
  export let onCancel;

  let frets = chord.frets ? processChordEntries(chord.frets, "fret") : {};
  let fingering = chord.fingering
    ? processChordEntries(chord.fingering, "fingering")
    : {};

  $: previewFrets = Object.values(frets).join(" ").trim();
  $: previewFingerings = Object.values(fingering).join(" ").trim();
  $: isPreviewPossible =
    Object.values(frets).filter((fret) => fret.toString().length).length === 6;
  $: tuningFormatted = tuning.split(" ");

  function processChordEntries(entries, key) {
    return Object.fromEntries(
      entries.split(" ").map((entry, i) => {
        return [key + (i + 1), processChordEntry(entry)];
      })
    );
  }

  function processChordEntry(entry) {
    return entry === "X" ? entry : parseInt(entry);
  }

  function handleFretChange(value, fingerKey) {
    // TODO: Probably a better way to achieve this
    if (typeof value === "string" || value < 1) {
      fingering[`fingering${fingerKey}`] = "X";
    }
  }

  function onSubmit() {
    chord.frets = previewFrets;
    chord.fingering = previewFingering;
    onSave(chord);
  }
</script>

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

<div in:fade>
  <Form {onSubmit}>
    <div class="chord">
      <div class="fields">
        <FormGroup>
          <LabelDefault htmlFor="chordEditName">Name</LabelDefault>
          <Input
            id="chordEditName"
            bind:value={chord.name}
            placeholder="e.g. Fmaj7" />
        </FormGroup>

        <div class="fieldsets">
          <ChordEditFieldset string={tuningFormatted[0]}>
            <ChordEditFret
              onBlur={handleFretChange}
              bind:value={frets.fret1}
              key="1"
              string={tuningFormatted[0]} />
            <ChordEditFinger
              bind:value={fingering.fingering1}
              fret={frets.fret1}
              key="1"
              string={tuningFormatted[0]} />
          </ChordEditFieldset>
          <ChordEditFieldset string={tuningFormatted[1]}>
            <ChordEditFret
              onBlur={handleFretChange}
              bind:value={frets.fret2}
              key="2"
              string={tuningFormatted[1]} />
            <ChordEditFinger
              bind:value={fingering.fingering2}
              fret={frets.fret2}
              key="2"
              string={tuningFormatted[1]} />
          </ChordEditFieldset>
          <ChordEditFieldset string={tuningFormatted[2]}>
            <ChordEditFret
              onBlur={handleFretChange}
              bind:value={frets.fret3}
              key="3"
              string={tuningFormatted[2]} />
            <ChordEditFinger
              bind:value={fingering.fingering3}
              fret={frets.fret3}
              key="3"
              string={tuningFormatted[2]} />
          </ChordEditFieldset>
        </div>
        <div class="fieldsets">
          <ChordEditFieldset string={tuningFormatted[3]}>
            <ChordEditFret
              onBlur={handleFretChange}
              bind:value={frets.fret4}
              key="4"
              string={tuningFormatted[3]} />
            <ChordEditFinger
              bind:value={fingering.fingering4}
              fret={frets.fret4}
              key="4"
              string={tuningFormatted[3]} />
          </ChordEditFieldset>
          <ChordEditFieldset string={tuningFormatted[4]}>
            <ChordEditFret
              onBlur={handleFretChange}
              bind:value={frets.fret5}
              key="5"
              string={tuningFormatted[4]} />
            <ChordEditFinger
              bind:value={fingering.fingering5}
              fret={frets.fret5}
              key="5"
              string={tuningFormatted[4]} />
          </ChordEditFieldset>
          <ChordEditFieldset string={tuningFormatted[5]}>
            <ChordEditFret
              onBlur={handleFretChange}
              bind:value={frets.fret6}
              key="6"
              string={tuningFormatted[5]} />
            <ChordEditFinger
              bind:value={fingering.fingering6}
              fret={frets.fret6}
              key="6"
              string={tuningFormatted[5]} />
          </ChordEditFieldset>
        </div>
      </div>
      <div class="preview">
        {#if isPreviewPossible}
          <div class="visualised">
            <ChordVisualised
              frets={previewFrets}
              fingering={previewFingerings}
              {tuning} />
          </div>
        {:else}
          <div class="placeholder">
            <ChordPreviewPlaceholder {tuning} />
          </div>
        {/if}
      </div>
    </div>
    <div class="buttons">
      <ButtonDefault on:click={onCancel}>Back</ButtonDefault>
      <ButtonPrimary type="submit">Save</ButtonPrimary>
    </div>
  </Form>
</div>
