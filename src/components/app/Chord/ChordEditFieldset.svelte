<script>
  import { FieldsetDefault, Legend } from "../../ui/Form";
  export let string;
</script>

<style>
  .fields {
    display: grid;
    gap: 0.25rem;
  }
</style>

<FieldsetDefault>
  <Legend>{string}</Legend>
  <div class="fields">
    <slot />
  </div>
</FieldsetDefault>
