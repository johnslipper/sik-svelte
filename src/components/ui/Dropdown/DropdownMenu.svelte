<script>
  export let position = "bottom";
  export let triggerId;
  export let id;
</script>

<ul
  {id}
  role="menu"
  aria-labelledby={triggerId}
  class="
    content
    {position === 'top' ? 'top' : ''}
    {position === 'center' ? 'center' : ''}
  "
>
  <slot />
</ul>

<style>
  .content {
    position: absolute;
    left: 0;
    z-index: var(--dropdownZindex);
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: var(--dropdownBackgroundColor);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -2px rgba(0, 0, 0, 0.04);
    border-radius: 0.5rem;
    border: 1px solid var(--dropdownBorderColor);
  }
  .top {
    top: 0;
  }

  .center {
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
</style>
