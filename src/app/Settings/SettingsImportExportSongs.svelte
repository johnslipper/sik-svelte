<script lang="ts">
  import SettingsExportSongs from "./SettingsExportSongs.svelte";
  import SettingsImportSongs from "./SettingsImportSongs.svelte";
</script>

<div class="wrapper">
  <SettingsExportSongs />
  <SettingsImportSongs />
</div>

<style>
  .wrapper {
    display: flex;
    gap: 0.5rem;
  }
</style>
