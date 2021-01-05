<script>
  import { Link } from "svelte-routing";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { plusIcon } from "../../ui/Icons/icons.js";
</script>

<style>
  .link :global(a) {
    display: flex;
    align-items: center;
    padding: 1rem var(--contentPaddingHorizontal);
    gap: 0.25rem;
  }
</style>

<div class="link">
  <Link to="/add">
    <Icon path={plusIcon} />
    <slot />
  </Link>
</div>
