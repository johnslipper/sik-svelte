<script>
  import { fade } from "svelte/transition";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import HomeLink from "../HomeLink.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
</script>

<Modal>
  <AppHeader title="Add song">
    <div slot="start" in:fade>
      <HomeLink>
        <VisuallyHidden>back to</VisuallyHidden>
        <span>Songs</span>
      </HomeLink>
    </div>
  </AppHeader>
  <SongEdit />
</Modal>
