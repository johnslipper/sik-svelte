<script>
  import { FieldsetDefault, LegendDefault } from "../../ui/Form";
  export let string;
</script>

<FieldsetDefault>
  <LegendDefault>{string}</LegendDefault>
  <div class="fields">
    <slot />
  </div>
</FieldsetDefault>

<style>
  .fields {
    display: grid;
    gap: 0.25rem;
  }
</style>
