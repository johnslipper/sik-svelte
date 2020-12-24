<script>
  import { Link } from "svelte-routing";
  import Icon from "./Icons/Icon.svelte";
  import { leftArrowIcon } from "./Icons/icons.js";
</script>

<style>
  .link :global(a) {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
</style>

<div class="link">
  <Link to="/">
    <Icon d={leftArrowIcon} />
    <span class="visually-hidden">back to songs</span>
  </Link>
</div>
