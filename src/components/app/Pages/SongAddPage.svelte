<script>
  import { fade, fly } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import { User, Collection } from "sveltefire";
  import { cleanDoc } from "../../../firebase.js";
  import { infoToast, errorToast } from "../../ui/Toasts/toasts.js";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { ButtonText, ButtonLink } from "../../ui/Button/";

  let song = {};

  function handleSave(song, songsRef, user) {
    songsRef.add({ ...cleanDoc(song), uid: user.uid }).then(
      (docRef) => {
        infoToast("Song saved");
        navigate(`/songs/${docRef.id}`);
      },
      (error) => errorToast(`Song saving failed: ${error}`)
    );
  }
</script>

<User let:user persist={localStorage}>
  <Collection path={`/users/${user.uid}/songs`} let:ref={songsRef}>
    <AppHeader title="Add song">
      <div slot="start" in:fade>
        <ButtonLink to="/songs">
          <span>Cancel</span>
          <VisuallyHidden>adding song</VisuallyHidden>
        </ButtonLink>
      </div>
      <div slot="end" in:fade>
        <ButtonText on:click={() => handleSave(song, songsRef, user)}>
          <span>Save</span>
          <VisuallyHidden>song</VisuallyHidden>
        </ButtonText>
      </div>
    </AppHeader>
    <div class="page" in:fly={{ y: 1000 }}>
      <SongEdit bind:song />
    </div>
  </Collection>
</User>
