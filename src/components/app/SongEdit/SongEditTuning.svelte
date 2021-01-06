<script>
  import { onMount } from "svelte";
  import {
    FieldsetDefault,
    LegendDefault,
    FormGroup,
    Input,
    Label,
    LabelDefault,
  } from "../../ui/Form";
  import Checkbox from "../../ui/Form/Checkbox.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let tuning;

  let stringCount = 6;
  let placeholders = ["E", "A", "D", "G", "B", "E"];
  let strings = [];
  let enableCustomTuning = false;

  onMount(() => {
    if (tuning && tuning.length) {
      strings = tuning.split(" ");
      enableCustomTuning = true;
    }
  });

  function handleStringChanged() {
    tuning = strings.join(" ");
    console.log("strings changed:", strings, tuning);
  }
  function handleDisableCustomTuning() {
    if (!enableCustomTuning) {
      strings = [];
      tuning = undefined;
    }
  }
</script>

<style>
  .wrapper {
    display: grid;
    gap: 0.5rem;
  }
  .fields {
    display: flex;
    gap: 0.25rem;
  }
</style>

<FieldsetDefault>
  <LegendDefault>Custom tuning</LegendDefault>
  <div class="wrapper">
    <Label>
      <Checkbox
        bind:checked={enableCustomTuning}
        on:change={handleDisableCustomTuning} />
      Enable custom tuning
    </Label>
    <div class="fields">
      {#each Array(stringCount) as _string, i}
        <FormGroup>
          <VisuallyHidden>
            <LabelDefault htmlFor="string{i + 1}">String {i + 1}</LabelDefault>
          </VisuallyHidden>
          <Input
            id="string{i + 1}"
            disabled={!enableCustomTuning}
            placeholder={placeholders[i]}
            bind:value={strings[i]}
            on:blur={handleStringChanged} />
        </FormGroup>
      {/each}
    </div>
  </div>
</FieldsetDefault>
