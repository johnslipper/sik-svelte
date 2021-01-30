<script>
  import { fly, slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { User, Doc } from "sveltefire";
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

  const iconTransition = {
    duration: 300,
    y: 20,
    delay: 550,
    easing: elasticOut,
    opacity: 1,
  };
</script>

<User persist={localStorage} let:user>
  <Doc path={`/users/${user.uid}/songs/${id}`} let:data={song}>
    <div slot="loading">Loading...</div>
    <div slot="fallback">Unable to display song, please refresh...</div>
    <SongHeader
      {id}
      title={song.title}
      artist={song.artist}
      album={song.album}
      artwork={song.artwork}
    />
    <Tabs>
      <div class="panels">
        <TabPanel>
          <SongLyrics lyrics={song.lyrics} />
        </TabPanel>
        <TabPanel>
          <SongViewChords
            chords={song.chordSections}
            tuning={song.tuning}
            capoAdjustment={song.capoAdjustment}
          />
        </TabPanel>
      </div>
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
    </Tabs>
  </Doc>
</User>

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
