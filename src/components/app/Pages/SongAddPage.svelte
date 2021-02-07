<script>
  import { fade, fly } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import { User, Collection } from "sveltefire";
  import { cleanDoc } from "../../../firebase.js";
  import { string, object } from "yup";
  import { infoToast, errorToast } from "../../ui/Toasts/toasts.js";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { ButtonText, ButtonLink } from "../../ui/Button/";
  import { Form } from "../../ui/Form/";

  let song = {};

  const schema = object().shape({
    title: string().required("Please provide the song title"),
  });

  function handleSave(song, songsRef, user) {
    songsRef.add({ ...cleanDoc(song), uid: user.uid }).then(
      (docRef) => {
        infoToast("Song saved");
        navigate(`/songs/${docRef.id}`);
      },
      (error) => errorToast(`Song saving failed: ${error}`)
    );
  }
</script>

<User let:user persist={localStorage}>
  <Collection path={`/users/${user.uid}/songs`} let:ref={songsRef}>
    <Form
      onSubmit={() => handleSave(song, songsRef, user)}
      values={song}
      {schema}
      let:errors
    >
      <AppHeader title="Add song">
        <div slot="start" in:fade>
          <ButtonLink to="/songs">
            <span>Cancel</span>
            <VisuallyHidden>adding song</VisuallyHidden>
          </ButtonLink>
        </div>
        <div slot="end" in:fade>
          <ButtonText type="submit">
            <span>Save</span>
            <VisuallyHidden>song</VisuallyHidden>
          </ButtonText>
        </div>
      </AppHeader>
      <div class="page" in:fly={{ y: 1000 }}>
        <SongEdit bind:song {errors} />
      </div>
    </Form>
  </Collection>
</User>
