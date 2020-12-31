<script>
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import ArtworkSearch from "../Artwork/ArtworkSearch.svelte";
  import ArtworkView from "../Artwork/ArtworkView.svelte";
  import ChordView from "../Chord/ChordView.svelte";
  import AddArea from "../../ui/AddArea.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Button, ButtonDefault } from "../../ui/Button";
  import {
    Input,
    FormGroup,
    Label,
    Textarea,
    Fieldset,
    Legend,
  } from "../../ui/Form";
  export let song = {
    title: "",
    artist: "",
    album: "",
    lyrics: "",
    tuning: "",
    chordSections: [],
  };
  const { open, close } = getContext("simple-modal");

  const openSearchModal = () => {
    open(
      ArtworkSearch,
      {
        queryInput: getInputQuery(song),
        onSelected: handleSelected,
      },
      {
        styleContent: { padding: 0, borderRadius: "0.5rem" },
      }
    );
  };

  function getInputQuery({ artist = "", title = "", album = "" }) {
    return `${artist} ${title} ${album}`.trim();
  }

  function handleSelected(result) {
    song.artwork = {
      title: result.trackName,
      artist: result.artistName,
      album: result.collectionName,
      url: result.artworkUrl100,
    };

    close();

    open(Dialogue, {
      message: "Use details of selected artwork for song?",
      onOkay: () => {
        song = {
          ...song,
          title: result.trackName,
          artist: result.artistName,
          album: result.collectionName,
        };
      },
    });
  }

  function handleAddSection() {
    song.chordSections = song.chordSections || [];
    song.chordSections = [
      ...song.chordSections,
      {
        title: "",
        chords: [],
      },
    ];
  }
</script>

<style>
  .wrapper {
    padding: 1rem;
  }
  .fields {
    display: grid;
    gap: 1rem;
  }
  .details {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .artwork :global(button) {
    /* iTunes artwork size */
    width: 100px;
    height: 100px;
  }
  .sections {
    display: grid;
    gap: 0.5rem;
  }
  .section {
    border-bottom: 1px solid var(--neutralLightest);
  }
  .sectionTitle {
    margin-bottom: 0.5rem;
  }
  .chords {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 0.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
    list-style: none;
    padding: var(--contentPaddingHorizontal);
    color: var(--neutralMedium);
  }
  .chord {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .chordAdd {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  .chordAdd :global(button) {
    width: 100%;
    height: 7rem;
    font-size: 0.85rem;
    display: grid;
    align-items: center;
    justify-content: center;
  }
</style>

<Fieldset>
  <Legend>Details</Legend>
  <div class="wrapper" in:fade>
    <div class="details">
      <div class="artwork">
        <Button on:click={openSearchModal}>
          {#if !song.artwork}
            <AddArea text="Add artwork" />
          {:else}
            <ArtworkView artwork={song.artwork} />
          {/if}
        </Button>
      </div>
      <div class="fields">
        <FormGroup>
          <Label htmlFor="songTitle">Title</Label>
          <Input id="songTitle" bind:value={song.title} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="songArtist">Artist</Label>
          <Input id="songArtist" bind:value={song.artist} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="songAlbum">Album</Label>
          <Input id="songAlbum" bind:value={song.album} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="songTuning">Tuning</Label>
          <Input
            id="songTuning"
            bind:value={song.tuning}
            placeholder="E A D G B E" />
        </FormGroup>
      </div>
    </div>
  </div>
</Fieldset>
<Fieldset>
  <Legend>Lyrics</Legend>
  <div class="wrapper" in:fade>
    <VisuallyHidden>
      <Label htmlFor="songLyrics">Lyrics</Label>
    </VisuallyHidden>
    <Textarea id="songLyrics" bind:value={song.lyrics} />
  </div>
</Fieldset>
<Fieldset>
  <Legend>Chords</Legend>
  <div in:fade>
    {#if song.chordSections}
      {#each song.chordSections as section, i}
        <div class="sections">
          <div class="section">
            <div class="wrapper">
              <div class="sectionTitle">
                <FormGroup>
                  <Label htmlFor="sectionTitle{i}">Title</Label>
                  <Input id="sectionTitle{i}" bind:value={section.title} />
                </FormGroup>
              </div>
              <ul class="chords">
                {#if section.chords}
                  {#each section.chords as chord, i}
                    <li class="chord">
                      <ChordView {chord} tuning={song.tuning} key="chord{i}" />
                    </li>
                  {/each}
                {/if}
                <li class="chordAdd">
                  <Button>
                    <AddArea text="Add chord" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      {/each}
    {/if}
    <div class="wrapper">
      <ButtonDefault on:click={handleAddSection}>Add section</ButtonDefault>
    </div>
  </div>
</Fieldset>
