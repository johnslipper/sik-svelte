<script>
  import { Link } from "svelte-routing";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { pencilIcon } from "../../ui/Icons/icons.js";
  export let id;
</script>

<style>
  .link :global(a) {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
  }
</style>

<div class="link">
  <Link to="/song/{id}/edit">
    <Icon path={pencilIcon} />
    <slot />
  </Link>
</div>
