<script>
  import { fly, slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import Modal from "svelte-simple-modal";
  import { songs } from "../../../songs.js";
  import SongHeader from "../SongView/SongViewHeader.svelte";
  import SongLyrics from "../SongView/SongViewLyrics.svelte";
  import SongViewChords from "../SongView/SongViewChords.svelte";
  import { Tab, Tabs, TabList, TabPanel } from "../../ui/Tabs";
  import Icon from "../../ui/Icons/Icon.svelte";
  import {
    musicNoteOutlinedIcon,
    microphoneOutlinedIcon,
  } from "../../ui/Icons/icons.js";
  export let id;
  $: song = $songs && $songs[id];

  const iconTransition = {
    duration: 300,
    y: 20,
    delay: 550,
    easing: elasticOut,
    opacity: 1,
  };
</script>

<style>
  .panels {
    padding-bottom: 5rem;
  }
  .tabList {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .text {
    text-transform: uppercase;
  }
</style>

{#if $songs}
  <Modal>
    <SongHeader
      id={song.id}
      title={song.title}
      artist={song.artist}
      album={song.album}
      artwork={song.artwork} />
    <Tabs>
      <div class="panels">
        <TabPanel>
          <SongLyrics lyrics={song.lyrics} />
        </TabPanel>
        <TabPanel>
          <SongViewChords
            chords={song.chordSections}
            tuning={song.tuning}
            capoAdjustment={song.capoAdjustment} />
        </TabPanel>
      </div>
      <div
        class="tabList"
        in:slide={{ duration: 250, delay: 300 }}
        out:slide={{ duration: 100 }}>
        <TabList>
          <Tab>
            <div class="icon" in:fly={iconTransition}>
              <Icon path={microphoneOutlinedIcon} size="1.85rem" />
            </div>
            <div class="text">Lyrics</div>
          </Tab>
          <Tab>
            <div class="icon" in:fly={iconTransition}>
              <Icon path={musicNoteOutlinedIcon} size="1.85rem" />
            </div>
            <div class="text">Chords</div>
          </Tab>
        </TabList>
      </div>
    </Tabs>
  </Modal>
{:else}Loading...{/if}
