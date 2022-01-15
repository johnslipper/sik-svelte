<script lang="ts">
  import { Button } from "ui/Button";
  import Icon from "ui/Icons/Icon.svelte";
  import { plusIcon } from "ui/Icons/icons";
  import sampleSong from "../SongSample";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import Heading from "ui/Heading/Heading.svelte";
  import LogoMark from "../../Logo/LogoMark.svelte";
  import { infoToast } from "ui/Toasts/toasts";

  function handleSampleSong() {
    // TODO: Add sample song
    console.log(sampleSong);
    infoToast("Song saved");
  }
</script>

<div class="wrapper">
  <div class="logo">
    <LogoMark />
  </div>
  <Heading fontSize="1.5rem">Welcome to Songs I Know</Heading>
  <p>Collect songs you've learned to find inspiration when you need it</p>
  <p>
    Use the <Icon path={plusIcon} size="0.8rem" />
    <VisuallyHidden>plus</VisuallyHidden> button at the top to create a song
  </p>
  <Button variant="default" on:click={handleSampleSong}
    >Or add a sample song</Button
  >
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 2rem;
    margin: 0 auto;
    text-align: center;
    max-width: 25rem;
  }
  .logo {
    max-width: 10rem;
    opacity: 0.85;
    margin: 0 auto 1rem;
  }
  p {
    margin: 1rem 0 1.5rem;
    color: var(--bodyColorMuted);
  }
</style>
