<script>
  import { onMount } from "svelte";
  import {
    FieldsetDefault,
    LegendDefault,
    FormGroup,
    Select,
    Option,
    Label,
    LabelDefault,
  } from "../../ui/Form";
  import Checkbox from "../../ui/Form/Checkbox.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let tuning;

  let stringCount = 6;
  let notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
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
    {#if enableCustomTuning}
      <div class="fields">
        {#each Array(stringCount) as _string, i}
          <FormGroup>
            <VisuallyHidden>
              <LabelDefault htmlFor="string{i + 1}">
                String
                {i + 1}
              </LabelDefault>
            </VisuallyHidden>
            <Select
              id="string{i + 1}"
              disabled={!enableCustomTuning}
              required
              bind:value={strings[i]}
              on:blur={handleStringChanged}>
              <Option value="" />
              {#each notes as note}
                <Option value={note}>{note}</Option>
              {/each}
            </Select>
          </FormGroup>
        {/each}
      </div>
    {/if}
  </div>
</FieldsetDefault>
