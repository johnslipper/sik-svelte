<script>
  export let onSubmit;
  export let autocomplete = "off";
  function handleSubmit(e) {
    onSubmit(e);
    return e.preventDefault();
  }
</script>

<form on:submit={handleSubmit} {autocomplete}>
  <slot />
</form>
