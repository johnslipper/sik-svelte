<script lang="ts">
  import { FormGroup, LabelDefault, Select, Option } from "ui/Form";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import type { ChordEntry } from "./index";
  export let string: ChordEntry;
  export let key: number;
  export let value: ChordEntry;

  let fingeringOptions = getFingeringOptions();

  function getFingeringOptions(totalFingerOptions = 5) {
    const options = new Array(totalFingerOptions);
    for (let i = 0; i < options.length; i++) {
      if (i === 0) {
        options[i] = { name: "N/A", value: "x" };
      } else {
        options[i] = { name: i.toString(), value: i };
      }
    }
    return options;
  }
</script>

<FormGroup>
  <LabelDefault htmlFor="finger{key}">
    <VisuallyHidden>{string} string</VisuallyHidden>
    Finger
  </LabelDefault>
  <Select id="finger{key}" bind:value>
    <Option value="" />
    {#each fingeringOptions as option}
      <Option value={option.value}>{option.name}</Option>
    {/each}
  </Select>
</FormGroup>
