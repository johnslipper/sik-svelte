<script>
  import { fade } from "svelte/transition";
  import { navigate } from "svelte-navigator";
  import { User, Doc } from "sveltefire";
  import { cleanDoc, redirectIfNoUser } from "../../../firebase.js";
  import { string, object } from "yup";
  import { infoToast, errorToast } from "../../ui/Toasts/toasts.js";
  import AppHeader from "../../ui/AppHeader.svelte";
  import LoadingEllipsis from "../../ui/LoadingEllipsis.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import SongEditActions from "../SongEdit/SongEditActions.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let id;
  import { Button, ButtonLink } from "../../ui/Button";
  import { Form } from "../../ui/Form";

  const schema = object().shape({
    title: string().required("Please provide the song title"),
  });

  function handleSave(song, songRef) {
    songRef.set(cleanDoc(song)).then(
      () => {
        infoToast("Song saved");
        navigate(`/songs/${id}`);
      },
      (error) => errorToast(`Song deletion failed: ${error}`)
    );
  }
</script>

<User
  persist={localStorage}
  let:user
  on:user={(e) => redirectIfNoUser(e.detail.user)}
>
  <Doc path={`/users/${user.uid}/songs/${id}`} let:data={song} let:ref={docRef}>
    <Form
      onSubmit={() => handleSave(song, docRef)}
      values={song}
      {schema}
      let:errors
    >
      <AppHeader title="Edit song">
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
        <SongEditActions {docRef} />
      </div>
      <div slot="loading">
        <div class="loading">
          <LoadingEllipsis />
        </div>
      </div>
    </Form>
  </Doc>
</User>

<style>
  .loading {
    padding: 1rem;
  }
</style>
