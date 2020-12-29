<script>
  import { fade } from "svelte/transition";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongsList from "../SongsList/SongsList.svelte";
  import SongAddLink from "../Links/SongAddLink.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Logo from "../../app/Logo.svelte";
  import songs from "../../../songs.js";
</script>

<AppHeader>
  <Logo />
  <div slot="end" in:fade>
    <SongAddLink>
      <span>Add</span>
      <VisuallyHidden>Song</VisuallyHidden>
    </SongAddLink>
  </div>
</AppHeader>
<SongsList {songs} />
