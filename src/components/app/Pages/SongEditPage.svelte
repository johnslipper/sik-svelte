<script>
  import { fade } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import { User, Doc } from "sveltefire";
  import AppHeader from "../../ui/AppHeader.svelte";
  import SongEdit from "../SongEdit/SongEdit.svelte";
  import SongEditActions from "../SongEdit/SongEditActions.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  export let id;
  import { ButtonText, ButtonLink } from "../../ui/Button";

  function handleSave(song, songRef) {
    songRef.update(song).then(
      () => navigate(`/songs/${id}`),
      (error) => console.error(error)
    );
  }
</script>

<Modal>
  <User persist={sessionStorage} let:user>
    <Doc
      path={`/users/${user.uid}/songs/${id}`}
      let:data={song}
      let:ref={docRef}
    >
      <AppHeader title="Edit song">
        <div slot="start" in:fade>
          <ButtonLink to="/songs/{id}">
            <span>Cancel</span>
            <VisuallyHidden>editing song</VisuallyHidden>
          </ButtonLink>
        </div>
        <div slot="end" in:fade>
          <ButtonText on:click={() => handleSave(song, docRef)}>Save</ButtonText
          >
        </div>
      </AppHeader>
      <div class="page" in:fade>
        <SongEdit {song} isEdit="true" />
        <SongEditActions {docRef} />
      </div>
      <div slot="loading">Loading...</div>
    </Doc>
  </User>
</Modal>
