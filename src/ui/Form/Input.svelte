<script lang="ts">
  // Type not allowed to be dynamic alongside value binding
  // TODO: Currently duplicating element per type, needs a better solution
  export let type = "text";
  export let id: string = undefined;
  export let name: string = undefined;
  export let placeholder: string = undefined;
  export let maxlength = 255;
  export let disabled = false;
  export let required = false;
  export let value: string | number;
</script>

{#if type === "password"}
  <input
    type="password"
    {id}
    {name}
    {placeholder}
    {maxlength}
    {disabled}
    {required}
    bind:value
    on:blur
  />
{:else if type === "email"}
  <input
    type="email"
    {id}
    {name}
    {placeholder}
    {maxlength}
    {disabled}
    {required}
    bind:value
    on:blur
  />
{:else}
  <input
    type="text"
    {id}
    {name}
    {placeholder}
    {maxlength}
    {disabled}
    {required}
    bind:value
    on:blur
  />
{/if}

<style>
  input {
    outline: none;
    width: 100%;
    font-size: 1rem;
    padding: var(--inputPadding);
    border: 1px solid var(--inputBorderColor);
    border-radius: var(--inputBorderRadius);
    color: var(--bodyColor);
  }
  input:focus {
    box-shadow: var(--focusOutlineShadow);
  }
</style>
