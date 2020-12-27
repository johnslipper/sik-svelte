<script>
  import { fade } from "svelte/transition";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongsList from "../SongsList/SongsList.svelte";
  import AddSongLink from "../Links/AddSongLink.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import songs from "../../../songs.js";
</script>

<AppHeader title="Songs I Know">
  <div slot="end" in:fade>
    <AddSongLink>
      <span>Add</span>
      <VisuallyHidden>Song</VisuallyHidden>
    </AddSongLink>
  </div>
</AppHeader>
<SongsList {songs} />
