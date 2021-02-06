<script>
  export let schema;
  export let values;
  export let onSubmit;
  export let autocomplete = "off";

  let errors = {};

  async function handleSubmit(e) {
    e.preventDefault();
    if (!schema) {
      onSubmit(e);
    }
    try {
      // `abortEarly: false` to get all the errors
      await schema.validate(values, { abortEarly: false });
      onSubmit(e);
      errors = {};
    } catch (err) {
      errors = extractErrors(err);
    }
  }
  function extractErrors(err) {
    return err.inner.reduce((acc, err) => {
      return { ...acc, [err.path]: err.message };
    }, {});
  }
</script>

<form novalidate on:submit={handleSubmit} {autocomplete}>
  <slot {errors} />
</form>
