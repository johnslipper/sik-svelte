<script lang="ts">
  import { getContext } from "svelte";
  import { fly, slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { useFocus } from "svelte-navigator";
  import SongHeader from "../Song/SongView/SongViewHeader.svelte";
  import SongLyrics from "../Song/SongView/SongViewLyrics.svelte";
  import SongViewChords from "../Song/SongView/SongViewChords.svelte";
  import { Tab, Tabs, TabList, TabPanel } from "ui/Tabs";
  import Icon from "ui/Icons/Icon.svelte";
  import {
    musicNoteOutlinedIcon,
    microphoneOutlinedIcon,
  } from "ui/Icons/icons";
  import { songStorageContext } from "../Song/SongStorage.svelte";
  export let id: string;

  const { getSong } = getContext(songStorageContext);
  $: song = getSong(id);

  const registerFocus = useFocus();

  const iconTransition = {
    duration: 300,
    y: 20,
    delay: 550,
    easing: elasticOut,
    opacity: 1,
  };
</script>

<SongHeader
  {id}
  title={song.title}
  artist={song.artist}
  album={song.album}
  artwork={song.artwork}
  {registerFocus}
/>
<Tabs>
  <div class="tabList" in:slide={{ duration: 250, delay: 300 }}>
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
  <div class="panels">
    <TabPanel>
      <SongLyrics lyrics={song.lyrics} />
    </TabPanel>
    <TabPanel>
      <SongViewChords
        chordSections={song.chordSections}
        stringOffsets={song.stringOffsets}
        capoAdjustment={song.capoAdjustment}
      />
    </TabPanel>
  </div>
</Tabs>

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
