<script>
  import { fade } from "svelte/transition";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let id;
  import songs from "../../../songs.js";
  import { ButtonLink } from "../../ui/Button";
  const song = songs[id];
</script>

<Modal>
  <AppHeader title="Edit song">
    <div slot="start" in:fade>
      <ButtonLink to="/song/{id}">
        <span>Cancel</span>
        <VisuallyHidden>editing song</VisuallyHidden>
      </ButtonLink>
    </div>
  </AppHeader>
  <div class="page" in:fade>
    <SongEdit {song} />
  </div>
</Modal>
