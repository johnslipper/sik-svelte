<script lang="ts">
  export let schema: { validate: Function } = undefined;
  export let values = undefined;
  export let onSubmit = undefined;
  export let autocomplete = "off";

  let errors = undefined;

  type ValidationError = { path: string; message: string };

  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (!schema) {
      onSubmit(e);
      return;
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
  function extractErrors(err: { inner: ValidationError[] }) {
    return err.inner.reduce((acc: object, err: ValidationError) => {
      return { ...acc, [err.path]: err.message };
    }, {});
  }
</script>

<form novalidate on:submit={handleSubmit} {autocomplete}>
  <slot {errors} />
</form>
