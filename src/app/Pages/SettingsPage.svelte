<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import AppHeader from "ui/AppHeader.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import { ButtonLink } from "ui/Button/";
  import Icon from "ui/Icons/Icon.svelte";
  import { leftArrowIcon } from "ui/Icons/icons";
  import Heading from "ui/Heading/Heading.svelte";
  import HeadingSticky from "ui/Heading/HeadingSticky.svelte";
  import {
    SettingsImportExportSongs,
    SettingsDelete,
    SettingsAbout,
  } from "../Settings";
</script>

<AppHeader title="Settings">
  <div slot="start" in:fade>
    <ButtonLink to="/songs">
      <Icon path={leftArrowIcon} size="1.1rem" />
      <VisuallyHidden>back to songs</VisuallyHidden>
    </ButtonLink>
  </div>
</AppHeader>
<div class="page" in:fly={{ y: 1000 }}>
  <HeadingSticky>
    <Heading level={2} fontSize="inherit">Import/Export songs</Heading>
  </HeadingSticky>
  <div class="wrapper">
    <SettingsImportExportSongs />
  </div>
  <HeadingSticky>
    <Heading level={2} fontSize="inherit">Clear data</Heading>
  </HeadingSticky>
  <div class="wrapper">
    <SettingsDelete />
  </div>
  <HeadingSticky>
    <Heading level={2} fontSize="inherit">About</Heading>
  </HeadingSticky>
  <div class="wrapper">
    <SettingsAbout />
  </div>
</div>

<style>
  .wrapper {
    padding: var(--contentPaddingHorizontal);
  }
</style>
