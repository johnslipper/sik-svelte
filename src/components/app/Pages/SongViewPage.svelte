<script>
  import { fly } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import songs from "../../../songs.js";
  import SongHeader from "../Song/SongHeader.svelte";
  import SongLyrics from "../Song/SongLyrics.svelte";
  import SongChords from "../Song/SongChords.svelte";
  import { Tab, Tabs, TabList, TabPanel } from "../../ui/Tabs";
  import Icon from "../../ui/Icons/Icon.svelte";
  import {
    musicNoteOutlinedIcon,
    microphoneOutlinedIcon,
  } from "../../ui/Icons/icons.js";
  export let id;
  const song = songs[id];

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
  .tab-list {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>

<div>
  <SongHeader
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
        <SongChords chords={song.chords} />
      </TabPanel>
    </div>
    <div class="tab-list">
      <TabList>
        <Tab>
          <div class="icon" in:fly={iconTransition}>
            <Icon size="2rem" d={microphoneOutlinedIcon} />
          </div>
          <div class="text">Lyrics</div>
        </Tab>
        <Tab>
          <div class="icon" in:fly={iconTransition}>
            <Icon size="2rem" d={musicNoteOutlinedIcon} />
          </div>
          <div class="text">Chords</div>
        </Tab>
      </TabList>
    </div>
  </Tabs>
</div>
