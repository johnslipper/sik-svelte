<script>
  export let onSubmit;
  function handleSubmit(e) {
    onSubmit(e);
    return e.preventDefault();
  }
</script>

<form on:submit={handleSubmit}>
  <slot />
</form>
