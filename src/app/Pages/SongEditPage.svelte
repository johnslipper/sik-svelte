<script lang="ts">
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import { navigate, useFocus } from "svelte-navigator";
  import { string, object } from "yup";
  import { infoToast } from "ui/Toasts/toasts";
  import AppHeader from "ui/AppHeader.svelte";
  import SongEdit from "../Song/SongEdit/SongEdit.svelte";
  import SongEditActions from "../Song/SongEdit/SongEditActions.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { Button, ButtonLink } from "ui/Button";
  import { Form } from "ui/Form";
  import type { Song } from "../Song/index";
  import { songStorageContext } from "../Song/SongStorage.svelte";

  export let id: number;
  const { getSong } = getContext(songStorageContext);
  const song: Song = getSong(id);

  const registerFocus = useFocus();

  const schema = object().shape({
    title: string().required("Please provide the song title"),
  });

  function handleSave() {
    // TODO: Save song
    infoToast("Song saved");
    navigate(`/songs/${id}`);
  }
</script>

<Form onSubmit={() => handleSave()} values={song} {schema} let:errors>
  <AppHeader title="Edit song" {registerFocus}>
    <div slot="start" in:fade>
      <ButtonLink to="/songs/{id}">
        <span>Cancel</span>
        <VisuallyHidden>editing song</VisuallyHidden>
      </ButtonLink>
    </div>
    <div slot="end" in:fade>
      <Button variant="text" type="submit">Save</Button>
    </div>
  </AppHeader>
  <div class="page" in:fade>
    <SongEdit {song} {errors} />
    <SongEditActions />
  </div>
</Form>
