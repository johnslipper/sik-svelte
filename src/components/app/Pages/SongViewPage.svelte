<script>
  import { fly, slide } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  import { User, Doc } from "sveltefire";
  import { useFocus } from "svelte-navigator";
  import { redirectIfNoUser } from "../../../firebase.js";
  import SongHeader from "../SongView/SongViewHeader.svelte";
  import SongLyrics from "../SongView/SongViewLyrics.svelte";
  import SongViewChords from "../SongView/SongViewChords.svelte";
  import { Tab, Tabs, TabList, TabPanel } from "../../ui/Tabs";
  import LoadingEllipsis from "../../ui/LoadingEllipsis.svelte";
  import Icon from "../../ui/Icons/Icon.svelte";
  import {
    musicNoteOutlinedIcon,
    microphoneOutlinedIcon,
  } from "../../ui/Icons/icons.js";
  export let id;

  const registerFocus = useFocus();

  const iconTransition = {
    duration: 300,
    y: 20,
    delay: 550,
    easing: elasticOut,
    opacity: 1,
  };
</script>

<User
  persist={localStorage}
  let:user
  on:user={(e) => redirectIfNoUser(e.detail.user)}
>
  <Doc path={`/users/${user.uid}/songs/${id}`} let:data={song}>
    <div slot="loading">
      <div class="loading">
        <LoadingEllipsis />
      </div>
    </div>
    <div slot="fallback">Unable to display song, please refresh...</div>
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
            chords={song.chordSections}
            stringOffsets={song.stringOffsets}
            capoAdjustment={song.capoAdjustment}
          />
        </TabPanel>
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
  .loading {
    padding: 1rem;
  }
</style>
