<script>
  import { fade } from "svelte/transition";
  import { Link } from "svelte-routing";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongsList from "../SongsList/SongsList.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import LogoCompact from "../Logo/LogoCompact.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { plusIcon } from "../../ui/Icons/icons.js";
  import { ButtonLink } from "../../ui/Button";
  import { songs } from "../../../songs.js";
</script>

<style>
  .songsList {
    --headerTopOffset: 3.5rem;
  }
</style>

<AppHeader>
  <Link to="/">
    <LogoCompact />
  </Link>
  <div slot="end" in:fade>
    <ButtonLink to="/add">
      <Icon path={plusIcon} size="1.1rem" />
      <VisuallyHidden>Add song</VisuallyHidden>
    </ButtonLink>
  </div>
</AppHeader>
<div class="songsList">
  <SongsList songs={$songs} />
</div>
