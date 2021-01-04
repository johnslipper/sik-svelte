<script>
  import { FormGroup, Label, Select, Option } from "../../ui/Form";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let string;
  export let key;
  export let value;
  export let fret;

  $: fretValid = fret > 0;

  let fingeringOptions = getFingeringOptions();

  function getFingeringOptions(totalFingerOptions = 5) {
    const options = new Array(totalFingerOptions);
    for (let i = 0; i < options.length; i++) {
      if (i === 0) {
        options[i] = { name: "N/A", value: "X" };
      } else {
        options[i] = { name: i.toString(), value: i };
      }
    }
    return options;
  }
</script>

<FormGroup>
  <Label htmlFor="finger{key}">
    <VisuallyHidden>{string} string</VisuallyHidden>
    Finger
  </Label>
  <Select id="finger{key}" bind:value disabled={!fretValid}>
    <Option value="" />
    {#each fingeringOptions as option}
      <Option value={option.value}>{option.name}</Option>
    {/each}
  </Select>
</FormGroup>
