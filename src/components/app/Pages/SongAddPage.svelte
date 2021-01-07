<script>
  import { fade, fly } from "svelte/transition";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import ButtonLink from "../../ui/Button/ButtonLink.svelte";
</script>

<Modal>
  <AppHeader title="Add song">
    <div slot="start" in:fade>
      <ButtonLink to="/">
        <span>Cancel</span>
        <VisuallyHidden>adding song</VisuallyHidden>
      </ButtonLink>
    </div>
  </AppHeader>
  <div class="page" in:fly={{ y: 1000 }}>
    <SongEdit />
  </div>
</Modal>
