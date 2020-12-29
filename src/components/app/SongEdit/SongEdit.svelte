<script>
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import ArtworkSearch from "../Artwork/ArtworkSearch.svelte";
  import ArtworkView from "../Artwork/ArtworkView.svelte";
  import AddArea from "../../ui/AddArea.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Button } from "../../ui/Button";
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
</style>

<Fieldset>
  <Legend>Details</Legend>
  <div class="wrapper" in:fade>
    <div class="details">
      <div class="artwork">
        <Button on:click={openSearchModal}>
          {#if !song.artwork}
            <AlbumArtworkAdd />
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
