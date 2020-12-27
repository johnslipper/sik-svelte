<script>
  import { fade } from "svelte/transition";
  import { Link } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let id;
  import songs from "../../../songs.js";
  const song = songs[id];
</script>

<Modal>
  <AppHeader title="Edit song">
    <div slot="start" in:fade>
      <Link to="/song/{id}">
        <span>Cancel</span>
        <VisuallyHidden>adding song</VisuallyHidden>
      </Link>
    </div>
  </AppHeader>
  <SongEdit {song} />
</Modal>
