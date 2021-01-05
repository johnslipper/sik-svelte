<script>
  import { FieldsetDefault, LegendDefault } from "../../ui/Form";
  export let string;
</script>

<style>
  .fields {
    display: grid;
    gap: 0.25rem;
  }
</style>

<FieldsetDefault>
  <LegendDefault>{string}</LegendDefault>
  <div class="fields">
    <slot />
  </div>
</FieldsetDefault>
