<script>
  import { getContext } from "svelte";
  import Dialogue from "../../ui/Modal/Dialogue.svelte";
  import ArtworkSearch from "../Artwork/ArtworkSearch.svelte";
  import ArtworkView from "../Artwork/ArtworkView.svelte";
  import AddArea from "../../ui/AddArea.svelte";
  import SongEditTuning from "./SongEditTuning.svelte";
  import { Button } from "../../ui/Button";
  import {
    Input,
    FormGroup,
    LabelDefault,
    Select,
    Option,
  } from "../../ui/Form";
  export let title;
  export let artist;
  export let album;
  export let artwork;
  export let tuning;
  export let capoAdjustment;

  const capoOptions = new Array(25);

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

  function handleSelected(selected) {
    artwork = selected;
    close();

    if (selected.album) {
      open(Dialogue, {
        message: "Use artwork title, artist & album for song?",
        okayText: "Yes",
        cancelText: "No",
        onOkay: () => {
          title = selected.title;
          artist = selected.artist;
          album = selected.album;
        },
      });
    }
  }
</script>

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

    <FormGroup>
      <LabelDefault htmlFor="songCapo">Capo adjustment</LabelDefault>
      <Select id="songCapo" bind:value={capoAdjustment}>
        <Option value="">0</Option>
        {#each capoOptions as _option, i}
          <Option value={i + 1}>{i + 1}</Option>
        {/each}
      </Select>
    </FormGroup>
  </div>
</div>

<style>
  .fields {
    display: grid;
    gap: 1rem;
  }
  .details {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: auto 1fr;
    max-width: 34rem;
  }
  .artwork :global(button) {
    /* iTunes artwork size */
    width: 100px;
    height: 100px;
  }
</style>
