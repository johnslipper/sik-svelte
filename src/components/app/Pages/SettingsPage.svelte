<script>
  import { fade, fly } from "svelte/transition";
  import Modal from "svelte-simple-modal";
  import { navigate } from "svelte-routing";
  import { User, Collection } from "sveltefire";
  import AppHeader from "../../ui/AppHeader.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { ButtonDefault, ButtonLink } from "../../ui/Button/";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { leftArrowIcon } from "../../ui/Icons/icons.js";
  import Heading from "../../ui/Heading/Heading.svelte";
  import HeadingSticky from "../../ui/Heading/HeadingSticky.svelte";
  import { downloadObjectAsJson, getDateString } from "../../../helpers.js";
  import { stripRefs } from "../../../firebase.js";

  function handleUser(user) {
    if (!user || !user.uid) {
      navigate(`/sign-in`);
    }
  }

  function handleExport(songs) {
    const exportName = `SIK Songs Export (${getDateString()})`;
    downloadObjectAsJson(stripRefs(songs), exportName);
  }
</script>

<Modal>
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
        <ButtonDefault on:click={() => auth.signOut()}>Sign out</ButtonDefault>
      </div>
      <HeadingSticky>
        <Heading text="Import/Export songs" fontSize="inherit" />
      </HeadingSticky>
      <div class="wrapper">
        <Collection
          path={`/users/${user.uid}/songs`}
          let:data={songs}
          query={(ref) => ref.orderBy("artist")}
        >
          <ButtonDefault on:click={() => handleExport(songs)}
            >Export songs</ButtonDefault
          >
          <div slot="loading">Loading songs for export...</div>
        </Collection>
      </div>
    </User>
  </div>
</Modal>

<style>
  .wrapper {
    padding: var(--contentPaddingHorizontal);
  }
</style>
