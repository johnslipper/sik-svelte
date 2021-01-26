<script>
  import { fade, fly } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import { User } from "sveltefire";
  import AppHeader from "../../ui/AppHeader.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { ButtonDefault, ButtonLink } from "../../ui/Button/";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { leftArrowIcon } from "../../ui/Icons/icons.js";
  import Heading from "../../ui/Heading/Heading.svelte";
  import HeadingSticky from "../../ui/Heading/HeadingSticky.svelte";
  import SettingsExportSongs from "../Settings/SettingsExportSongs.svelte";
  import SettingsDelete from "../Settings/SettingsDelete.svelte";

  function handleUser(user) {
    if (!user || !user.uid) {
      navigate(`/sign-in`);
    }
  }
</script>

<AppHeader title="Settings">
  <div slot="start" in:fade>
    <ButtonLink to="/songs">
      <Icon path={leftArrowIcon} size="1.1rem" />
      <VisuallyHidden>back to songs</VisuallyHidden>
    </ButtonLink>
  </div>
</AppHeader>
<div class="page" in:fly={{ y: 1000 }}>
  <User
    let:user
    persist={sessionStorage}
    let:auth
    on:user={(e) => handleUser(e.detail.user)}
  >
    <HeadingSticky>
      <Heading text="User" fontSize="inherit" />
    </HeadingSticky>
    <div class="wrapper">
      <div class="user">
        <div>
          <div>You are logged in as</div>
          <strong>{user.email}</strong>
        </div>
        <ButtonDefault on:click={() => auth.signOut()}>Sign out</ButtonDefault>
      </div>
    </div>
    <HeadingSticky>
      <Heading text="Import/Export songs" fontSize="inherit" />
    </HeadingSticky>
    <div class="wrapper">
      <SettingsExportSongs {user} />
    </div>
    <HeadingSticky>
      <Heading text="Clear data" fontSize="inherit" />
    </HeadingSticky>
    <div class="wrapper">
      <SettingsDelete {auth} {user} />
    </div>
  </User>
</div>

<style>
  .wrapper {
    padding: var(--contentPaddingHorizontal);
  }
  .user {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr auto;
  }
</style>
