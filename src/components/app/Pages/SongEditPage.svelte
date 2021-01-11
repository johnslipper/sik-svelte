<script>
  import { fade } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let id;
  import songs from "../../../songs.js";
  import { ButtonText, ButtonLink } from "../../ui/Button";
  let song = songs[id];

  function handleSave(song) {
    // TODO
    console.log(song);
    navigate(`/songs/${id}`);
  }
</script>

<Modal>
  <AppHeader title="Edit song">
    <div slot="start" in:fade>
      <ButtonLink to="/songs/{id}">
        <span>Cancel</span>
        <VisuallyHidden>editing song</VisuallyHidden>
      </ButtonLink>
    </div>
    <div slot="end" in:fade>
      <ButtonText on:click={() => handleSave(song)}>Save</ButtonText>
    </div>
  </AppHeader>
  <div class="page" in:fade>
    <SongEdit bind:song />
  </div>
</Modal>
