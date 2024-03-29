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
  import { songStoreContext } from "../Song/SongStoreContext.svelte";
  const { songs } = getContext(songStoreContext);

  const registerFocus = useFocus();
  $: sortedSongs = songs.sortBy($songs, "title");
</script>

<div class="wrapper">
  <AppHeader>
    <div slot="start" in:fade>
      <ButtonLink to="/settings">
        <Icon path={cogIcon} size="1.1rem" />
        <VisuallyHidden>Settings</VisuallyHidden>
      </ButtonLink>
    </div>
    <div class="logo">
      <Link to="/">
        <LogoCompact />
      </Link>
    </div>
    <div slot="end" in:fade>
      <ButtonLink to="/add">
        <Icon path={plusIcon} size="1.1rem" />
        <VisuallyHidden>Add song</VisuallyHidden>
      </ButtonLink>
    </div>
  </AppHeader>
  <div class="list">
    {#if sortedSongs}
      {#if sortedSongs.length}
        <SongsList songs={sortedSongs} {registerFocus} />
      {:else}
        <div in:fade={{ delay: 100 }}>
          <SongsListEmpty />
        </div>
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
  .logo :global(a):focus {
    background-color: var(--neutralLightest);
    outline-color: var(--primaryDark);
  }
</style>
