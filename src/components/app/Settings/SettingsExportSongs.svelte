<script>
  import { Collection } from "sveltefire";
  import { Button } from "../../ui/Button";
  import { downloadObjectAsJson, getDateString } from "../../../helpers.js";
  import { stripRefs } from "../../../firebase.js";

  export let user;

  function handleExport(songs) {
    const exportName = `SIK Songs Export (${getDateString()})`;
    downloadObjectAsJson(stripRefs(songs), exportName);
  }
</script>

<Collection
  path={`/users/${user.uid}/songs`}
  let:data={songs}
  query={(ref) => ref.orderBy("artist")}
>
  <Button variant="default" on:click={() => handleExport(songs)}
    >Export songs</Button
  >
  <div slot="loading">Loading songs for export...</div>
</Collection>
