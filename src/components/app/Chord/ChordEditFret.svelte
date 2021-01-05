<script>
  import { FormGroup, LabelDefault, Select, Option } from "../../ui/Form";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let value;
  export let string;
  export let key;
  export let onBlur;

  let fretOptions = getFretOptions(24);

  function getFretOptions(totalFrets) {
    const options = new Array(totalFrets);
    for (let i = 0; i < options.length; i++) {
      if (i === 0) {
        options[i] = { name: "N/A", value: "X" };
      } else if (i === 1) {
        options[i] = { name: "Open", value: 0 };
      } else {
        options[i] = { name: (i - 1).toString(), value: i - 1 };
      }
    }
    return options;
  }
</script>

<FormGroup>
  <LabelDefault htmlFor="fret{key}">
    <VisuallyHidden>{string} string</VisuallyHidden>
    Fret
  </LabelDefault>
  <Select id="fret{key}" bind:value required on:blur={() => onBlur(value, key)}>
    <Option value="" />
    {#each fretOptions as option}
      <Option value={option.value}>{option.name}</Option>
    {/each}
  </Select>
</FormGroup>
