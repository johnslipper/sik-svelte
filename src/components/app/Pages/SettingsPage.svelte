<script>
  import { fade, fly } from "svelte/transition";
  import Modal from "svelte-simple-modal";
  import AppHeader from "../../ui/AppHeader.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { ButtonDefault, ButtonLink } from "../../ui/Button/";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { leftArrowIcon } from "../../ui/Icons/icons.js";
  import Heading from "../../ui/Heading/Heading.svelte";
  import { songs } from "../../../songs.js";

  function handleExport() {
    const exportName = `SIK Songs Export (${getDateString()})`;
    downloadObjectAsJson($songs, exportName);
  }

  function getDateString() {
    const now = new Date();
    return now.toLocaleString().replaceAll("/", "-").replaceAll(":", "-");
  }

  function downloadObjectAsJson(exportObj, exportName) {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(exportObj)
    )}`;
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
</script>

<Modal>
  <AppHeader title="Settings">
    <div slot="start" in:fade>
      <ButtonLink to="/songs">
        <Icon path={leftArrowIcon} size="1.1rem" />
        <VisuallyHidden>back to songs</VisuallyHidden>
      </ButtonLink>
    </div>
  </AppHeader>
  <div class="page" in:fly={{ y: 1000 }}>
    <Heading text="Import/Export songs" />
    <ButtonDefault on:click={handleExport}>Export songs</ButtonDefault>
  </div>
</Modal>
