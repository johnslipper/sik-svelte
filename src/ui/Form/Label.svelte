<script lang="ts">
  export let htmlFor: string = undefined;
</script>

<label for={htmlFor || undefined}>
  <slot />
</label>
