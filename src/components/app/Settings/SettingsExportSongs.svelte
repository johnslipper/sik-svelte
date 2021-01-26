<script>
  import { Collection } from "sveltefire";
  import { ButtonDefault } from "../../ui/Button";
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
  <ButtonDefault on:click={() => handleExport(songs)}
    >Export songs</ButtonDefault
  >
  <div slot="loading">Loading songs for export...</div>
</Collection>
