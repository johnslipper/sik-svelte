<script>
  import { fade } from "svelte/transition";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import HomeLink from "../Links/HomeLink.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let id;
  import songs from "../../../songs.js";
  const song = songs[id];
</script>

<Modal>
  <AppHeader title="Edit song">
    <div slot="start" in:fade>
      <HomeLink>
        <VisuallyHidden>back to</VisuallyHidden>
        <span>Songs</span>
      </HomeLink>
    </div>
  </AppHeader>
  <SongEdit {song} />
</Modal>
