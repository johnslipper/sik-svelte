<script>
  import { getContext } from "svelte";
  import { Collection } from "sveltefire";
  import { navigate } from "svelte-routing";
  import { infoToast } from "../../ui/Toasts/toasts.js";
  import { Button } from "../../ui/Button";
  import FormError from "../../ui/Form/FormError.svelte";
  import { Dialogue, SensitiveConfirmation } from "../../ui/Modal";
  import LoadingEllipsis from "../../ui/LoadingEllipsis.svelte";

  export let user;
  export let auth;

  const { open } = getContext("simple-modal");
  let error = "";

  function handleDeleteSongs(songs) {
    clearError();
    if (songs.length) {
      open(SensitiveConfirmation, {
        message:
          "Are you sure you want to delete ALL the songs stored? ...Make sure you've exported anything you want to keep first!",
        confirmationText: "songs",
        onOkay: () => {
          Promise.all(songs.map((song) => song.ref.delete())).then(
            () => infoToast("Song saved"),
            ({ message }) => (error = message)
          );
        },
      });
    } else {
      open(Dialogue, {
        message: "You don't currently have any songs to delete",
        showCancelButton: false,
      });
    }
  }

  function handleDeleteUser(songs) {
    clearError();
    if (songs.length) {
      open(Dialogue, {
        message: "Please first delete all songs first",
        showCancelButton: false,
      });
    } else {
      open(SensitiveConfirmation, {
        message:
          "Are you sure you want to remove yourself and all data entirely from the app? ...There's no going back, you'll be starting from scratch!",
        confirmationText: "everything",
        onOkay: () => {
          auth.currentUser.delete().then(
            () => navigate("/"),
            ({ message }) => (error = message)
          );
        },
      });
    }
  }

  function clearError() {
    error = "";
  }
</script>

<div class="wrapper">
  <div class="actions">
    <Collection path={`/users/${user.uid}/songs`} let:data={songs}>
      <div slot="loading">
        <LoadingEllipsis />
      </div>
      <Button variant="default" on:click={() => handleDeleteSongs(songs)}
        >Delete all songs</Button
      >
      <Button variant="default" on:click={() => handleDeleteUser(songs)}
        >Delete user</Button
      >
    </Collection>
  </div>
  <FormError message={error} />
</div>

<style>
  .wrapper {
    display: grid;
    gap: 0.5rem;
  }
  .actions {
    display: flex;
    gap: 0.5rem;
  }
</style>
