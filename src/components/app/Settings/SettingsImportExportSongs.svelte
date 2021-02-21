<script>
  import { Collection } from "sveltefire";
  import LoadingEllipsis from "../../ui/LoadingEllipsis.svelte";
  import SettingsExportSongs from "./SettingsExportSongs.svelte";
  import SettingsImportSongs from "./SettingsImportSongs.svelte";
  export let user;
</script>

<Collection
  path={`/users/${user.uid}/songs`}
  let:data={songs}
  query={(ref) => ref.orderBy("artist")}
  let:ref={songsRef}
>
  <div class="wrapper">
    <SettingsExportSongs {songs} />
    <SettingsImportSongs {songsRef} />
  </div>

  <div slot="loading">
    <div class="loading">
      <LoadingEllipsis />
    </div>
  </div>
</Collection>

<style>
  .wrapper {
    display: flex;
    gap: 0.5rem;
  }
  .loading {
    padding: 1rem;
  }
</style>
