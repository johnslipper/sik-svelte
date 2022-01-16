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
  import LoadingEllipsis from "ui/LoadingEllipsis.svelte";

  export let id: string;
  const { getSong, updateSong } = getContext(songStorageContext);

  const registerFocus = useFocus();

  const schema = object().shape({
    title: string().required("Please provide the song title"),
  });

  function handleSave(song: Song) {
    updateSong(song).then(({ id }) => {
      infoToast("Song saved");
      navigate(`/songs/${id}`);
    });
  }
</script>

{#await getSong(id)}
  <LoadingEllipsis />
{:then song}
  <Form onSubmit={() => handleSave(song)} values={song} {schema} let:errors>
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
      <SongEditActions {song} />
    </div>
  </Form>
{/await}
