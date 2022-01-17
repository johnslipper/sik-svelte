<script lang="ts">
  import { getContext } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { navigate } from "svelte-navigator";
  import { string, object } from "yup";
  import { infoToast } from "ui/Toasts/toasts";
  import AppHeader from "ui/AppHeader.svelte";
  import SongEdit from "../Song/SongEdit/SongEdit.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { Button, ButtonLink } from "ui/Button/";
  import { Form } from "ui/Form/";
  import type { Song } from "../Song/index";
  import { songStorageContext } from "../Song/SongStorage.svelte";

  const { addSong } = getContext(songStorageContext);

  let song: Song = {
    title: "",
  };

  const schema = object().shape({
    title: string().required("Please provide the song title"),
  });

  function handleSave(song: Song) {
    addSong(song).then(({ id }) => {
      infoToast("Song saved");
      navigate(`/songs/${id}`);
    });
  }
</script>

<Form onSubmit={() => handleSave(song)} values={song} {schema} let:errors>
  <AppHeader title="Add song">
    <div slot="start" in:fade>
      <ButtonLink to="/songs">
        <span>Cancel</span>
        <VisuallyHidden>adding song</VisuallyHidden>
      </ButtonLink>
    </div>
    <div slot="end" in:fade>
      <Button variant="text" type="submit">
        <span>Save</span>
        <VisuallyHidden>song</VisuallyHidden>
      </Button>
    </div>
  </AppHeader>
  <div class="page" in:fly={{ y: 1000 }}>
    <SongEdit bind:song {errors} />
  </div>
</Form>
