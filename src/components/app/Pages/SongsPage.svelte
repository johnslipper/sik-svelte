<script>
  import { fade } from "svelte/transition";
  import { Link } from "svelte-routing";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongsList from "../SongsList/SongsList.svelte";
  import SongsListPlaceholders from "../SongsList/SongsListPlaceholders.svelte";
  import Welcome from "../Welcome.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import LogoCompact from "../Logo/LogoCompact.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { plusIcon, cogIcon } from "../../ui/Icons/icons.js";
  import { ButtonLink } from "../../ui/Button";
  import { User, Collection } from "sveltefire";
</script>

<div class="wrapper">
  <AppHeader>
    <div slot="start" in:fade>
      <User persist={sessionStorage}>
        <ButtonLink to="/settings">
          <Icon path={cogIcon} size="1.1rem" />
          <VisuallyHidden>Settings</VisuallyHidden>
        </ButtonLink>
      </User>
    </div>
    <Link to="/">
      <LogoCompact />
    </Link>
    <div slot="end" in:fade>
      <User persist={sessionStorage}>
        <ButtonLink to="/add">
          <Icon path={plusIcon} size="1.1rem" />
          <VisuallyHidden>Add song</VisuallyHidden>
        </ButtonLink>
      </User>
    </div>
  </AppHeader>
  <div class="list">
    <User let:user persist={sessionStorage}>
      <Collection
        path={`/users/${user.uid}/songs`}
        let:data={songs}
        query={(ref) => ref.orderBy("artist")}
      >
        <SongsList {songs} />
        <div slot="loading">
          <SongsListPlaceholders />
        </div>
      </Collection>

      <div class="welcome" slot="signed-out" in:fade>
        <Welcome />
      </div>
    </User>
  </div>
</div>

<style>
  .wrapper {
    --headerTopOffset: 3.5rem;
  }
  .wrapper,
  .list,
  .welcome {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
