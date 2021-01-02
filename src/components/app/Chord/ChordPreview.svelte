<script>
  import { fade } from "svelte/transition";
  import ChordVisualised from "./ChordVisualised.svelte";
  import { ButtonPrimary, ButtonDefault } from "../../ui/Button";
  import { Form, FormGroup, Input, Label } from "../../ui/Form";
  import ChordPreviewPlaceholder from "./ChordPreviewPlaceholder.svelte";
  export let chord;
  export let tuning = "";
  export let onSave;
  export let onCancel;
</script>

<style>
  .fields {
    display: grid;
    gap: 0.5rem;
  }
  .chord {
    display: grid;
    gap: 0.25rem;
    grid-template-columns: 1fr 1fr;
  }
  .buttons {
    margin-top: 0.5rem;
  }
  .placeholder {
    opacity: 0.5;
  }
</style>

<div in:fade>
  <Form onSubmit={() => onSave(chord)}>
    <div class="chord">
      <div class="fields">
        <FormGroup>
          <Label htmlFor="chordEditName">Name</Label>
          <Input
            id="chordEditName"
            bind:value={chord.name}
            placeholder="e.g. Fmaj7" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="chordEditFrets">Frets</Label>
          <Input
            id="chordEditFrets"
            bind:value={chord.frets}
            placeholder="e.g. 1 X 2 2 1 0" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="chordEditFingering">Fingering</Label>
          <Input
            id="chordEditFingering"
            bind:value={chord.fingering}
            placeholder="e.g. 1 X 3 4 2 X" />
        </FormGroup>
      </div>
      <div class="preview">
        {#if chord.fingering && chord.frets}
          <ChordVisualised
            frets={chord.frets}
            fingering={chord.fingering}
            {tuning} />
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
