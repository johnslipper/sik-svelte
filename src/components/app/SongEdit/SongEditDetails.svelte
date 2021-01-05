<script>
  import { getContext } from "svelte";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import ArtworkSearch from "../Artwork/ArtworkSearch.svelte";
  import ArtworkView from "../Artwork/ArtworkView.svelte";
  import AddArea from "../../ui/AddArea.svelte";
  import SongEditTuning from "./SongEditTuning.svelte";
  import { Button } from "../../ui/Button";
  import { Input, FormGroup, LabelDefault } from "../../ui/Form";
  export let title;
  export let artist;
  export let album;
  export let artwork;
  export let tuning;

  const { open, close } = getContext("simple-modal");

  const openSearchModal = () => {
    open(
      ArtworkSearch,
      {
        queryInput: getInputQuery(artist, title, album),
        onSelected: handleSelected,
      },
      {
        styleContent: { padding: 0, borderRadius: "0.5rem" },
      }
    );
  };

  function getInputQuery(artist = "", title = "", album = "") {
    return `${artist} ${title} ${album}`.trim();
  }

  function handleSelected({
    trackName,
    artistName,
    collectionName,
    artworkUrl100,
  }) {
    artwork = {
      title: trackName,
      artist: artistName,
      album: collectionName,
      url: artworkUrl100,
    };

    close();

    open(Dialogue, {
      message: "Use details of selected artwork for song?",
      onOkay: () => {
        title = trackName;
        artist = artistName;
        album = collectionName;
      },
    });
  }
</script>

<style>
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

<div class="details">
  <div class="artwork">
    <Button on:click={openSearchModal}>
      {#if !artwork}
        <AddArea text="Add artwork" />
      {:else}
        <ArtworkView {artwork} />
      {/if}
    </Button>
  </div>
  <div class="fields">
    <FormGroup>
      <LabelDefault htmlFor="songTitle">Title</LabelDefault>
      <Input id="songTitle" bind:value={title} />
    </FormGroup>

    <FormGroup>
      <LabelDefault htmlFor="songArtist">Artist</LabelDefault>
      <Input id="songArtist" bind:value={artist} />
    </FormGroup>

    <FormGroup>
      <LabelDefault htmlFor="songAlbum">Album</LabelDefault>
      <Input id="songAlbum" bind:value={album} />
    </FormGroup>

    <SongEditTuning bind:tuning />
  </div>
</div>
