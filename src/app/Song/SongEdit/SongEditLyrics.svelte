<script lang="ts">
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { LabelDefault, Textarea } from "ui/Form";

  export let lyrics = "";
</script>

<VisuallyHidden>
  <LabelDefault htmlFor="songLyrics">Lyrics</LabelDefault>
</VisuallyHidden>
<Textarea id="songLyrics" bind:value={lyrics} />
