<script>
  import { fade, fly } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { ButtonText, ButtonLink } from "../../ui/Button/";

  let song = {};

  function handleSave(song) {
    // TODO
    console.log(song);
    navigate("/songs");
  }
</script>

<Modal>
  <AppHeader title="Add song">
    <div slot="start" in:fade>
      <ButtonLink to="/songs">
        <span>Cancel</span>
        <VisuallyHidden>adding song</VisuallyHidden>
      </ButtonLink>
    </div>
    <div slot="end" in:fade>
      <ButtonText on:click={() => handleSave(song)}>
        <span>Save</span>
        <VisuallyHidden>song</VisuallyHidden>
      </ButtonText>
    </div>
  </AppHeader>
  <div class="page" in:fly={{ y: 1000 }}>
    <SongEdit bind:song />
  </div>
</Modal>
