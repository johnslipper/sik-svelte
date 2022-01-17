<script lang="ts">
  import { FieldsetDefault, LegendDefault } from "ui/Form";
  export let string: string;
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

  .fields :global(select) {
    padding: 0.2rem 0.1rem;
  }
</style>
