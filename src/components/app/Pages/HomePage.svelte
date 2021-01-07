<script>
  import { fade } from "svelte/transition";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongsList from "../SongsList/SongsList.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Logo from "../../app/Logo.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { plusIcon } from "../../ui/Icons/icons.js";
  import { ButtonLink } from "../../ui/Button";
  import songs from "../../../songs.js";
</script>

<AppHeader>
  <Logo />
  <div slot="end" in:fade>
    <ButtonLink to="/add">
      <Icon path={plusIcon} size="1.1rem" />
      <VisuallyHidden>Add song</VisuallyHidden>
    </ButtonLink>
  </div>
</AppHeader>
<SongsList {songs} />
