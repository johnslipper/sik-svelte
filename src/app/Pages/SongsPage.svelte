<script lang="ts">
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import { Link, useFocus } from "svelte-navigator";
  import AppHeader from "ui/AppHeader.svelte";
  import SongsList from "../Song/SongsList/SongsList.svelte";
  import SongsListPlaceholders from "../Song/SongsList/SongsListPlaceholders.svelte";
  import SongsListEmpty from "../Song/SongsList/SongsListEmpty.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import LogoCompact from "../Logo/LogoCompact.svelte";
  import Icon from "ui/Icons/Icon.svelte";
  import { plusIcon, cogIcon } from "ui/Icons/icons";
  import { ButtonLink } from "ui/Button";
  import { songStorageContext } from "../Song/SongStorage.svelte";

  const registerFocus = useFocus();
  const { songs } = getContext(songStorageContext);
</script>

<div class="wrapper">
  <AppHeader>
    <div slot="start" in:fade>
      <ButtonLink to="/settings">
        <Icon path={cogIcon} size="1.1rem" />
        <VisuallyHidden>Settings</VisuallyHidden>
      </ButtonLink>
    </div>
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
  <div class="list">
    {#if $songs}
      {#if $songs.length}
        <SongsList songs={$songs} {registerFocus} />
      {:else}
        <SongsListEmpty />
      {/if}
    {:else}
      <SongsListPlaceholders />
    {/if}
  </div>
</div>

<style>
  .wrapper {
    --headerTopOffset: 3.5rem;
  }
  .wrapper,
  .list {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
