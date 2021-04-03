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
  import { standardTuningOffsets } from "../Chord/helpers.js";
  export let stringOffsets;
  let enableCustomTuning = false;

  onMount(() => {
    if (stringOffsets) {
      enableCustomTuning = true;
    }
  });

  function handleToggleCustomTuning() {
    if (enableCustomTuning) {
      stringOffsets = [0, 0, 0, 0, 0, 0];
    } else {
      stringOffsets = undefined;
    }
  }
</script>

<FieldsetDefault>
  <LegendDefault>Custom tuning</LegendDefault>
  <div class="wrapper">
    <Label>
      <Checkbox
        bind:checked={enableCustomTuning}
        on:change={handleToggleCustomTuning}
      />
      Enable custom tuning
    </Label>
    {#if enableCustomTuning && stringOffsets}
      <div class="fields">
        {#each standardTuningOffsets as string, i}
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
              bind:value={stringOffsets[i]}
            >
              {#each string as option}
                <Option value={option.offset}>{option.note}</Option>
              {/each}
            </Select>
          </FormGroup>
        {/each}
      </div>
    {/if}
  </div>
</FieldsetDefault>

<style>
  .wrapper {
    display: grid;
    gap: 0.5rem;
  }
  .fields {
    display: grid;
    gap: 0.25rem;
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
  }
</style>
