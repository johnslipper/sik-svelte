<script>
  import { fade, fly } from "svelte/transition";
  import { Link } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
</script>

<Modal>
  <AppHeader title="Add song">
    <div slot="start" in:fade>
      <Link to="/">
        <span>Cancel</span>
        <VisuallyHidden>adding song</VisuallyHidden>
      </Link>
    </div>
  </AppHeader>
  <div class="page" in:fly={{ y: 1000 }}>
    <SongEdit />
  </div>
</Modal>
