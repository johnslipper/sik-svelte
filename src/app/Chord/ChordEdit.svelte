<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { addChord } from "./chordLocalStorage";
  import { chordSearch } from "./chordSearch";
  import { Button } from "ui/Button";
  import { Form, FormGroup, Input, LabelDefault } from "ui/Form";
  import Heading from "ui/Heading/Heading.svelte";
  import VisuallyHidden from "ui/VisuallyHidden.svelte";
  import ChordPreview from "./ChordPreview.svelte";
  import ChordSearchResults from "./ChordSearchResults.svelte";
  import ChordRecent from "./ChordRecent.svelte";
  import type { Chord } from "./index";

  export let chord: Chord;
  export let stringOffsets: number[] = undefined;
  export let capoAdjustment: number = undefined;
  export let onSave: (chord: Chord) => void;
  export let onCancel: () => void;

  let showChord = false;
  let isSearching = false;
  let searchInput = "";
  let results: Chord[] = undefined;

  onMount(() => {
    searchInput = isChordNameOnly() ? chord.name : "";
    showChord = chord && !isChordNameOnly();
  });

  function isChordNameOnly() {
    if (!chord) {
      return false;
    }
    if (chord.name && !chord.frets && !chord.fingering) {
      return true;
    }
    return false;
  }

  function handleSelectCustomChord() {
    showChord = true;
    chord = {};
  }

  function handleSelectBack() {
    searchInput = searchInput || chord.name;
    showChord = false;
    chord = undefined;
  }

  function handleSubmitSearch() {
    if (!searchInput) {
      return;
    }
    isSearching = true;
    chordSearch(searchInput)
      .then((response = []) => {
        results = response.map((chord) => formatChordResponse(chord));
      })
      .finally(() => (isSearching = false));
  }

  function formatChordResponse({ chordName, strings, fingering }) {
    const formattedName = chordName.replaceAll(",", "");
    return {
      name: formattedName,
      frets: strings,
      fingering,
    };
  }

  function handleSelectedResult(selected: Chord) {
    chord = selected;
    showChord = true;
  }

  function onSaveChord(chord: Chord) {
    addChord(chord);
    onSave(chord);
  }
</script>

<div class="wrapper">
  {#if !showChord}
    <div class="heading">
      <Heading level={2} fontSize="1.25rem">Add chord</Heading>
    </div>
    <Form onSubmit={handleSubmitSearch}>
      <div class="search">
        <FormGroup>
          <LabelDefault htmlFor="chordNameSearch">Name</LabelDefault>
          <Input
            id="chordNameSearch"
            bind:value={searchInput}
            placeholder="e.g. Bbmaj7"
            disabled={isSearching}
          />
          {#if results && !results.length}
            <div class="noResults" in:fade>No results</div>
          {/if}
        </FormGroup>
        <div class="buttons">
          <Button variant="primary" type="submit" on:click={handleSubmitSearch}>
            {#if isSearching}
              Searching...
            {:else}
              Search
              <VisuallyHidden>chord</VisuallyHidden>
            {/if}
          </Button>
          <Button variant="default" on:click={onCancel}>Cancel</Button>
          <div class="custom">
            <Button variant="default" on:click={handleSelectCustomChord}>
              Custom
              <VisuallyHidden>chord</VisuallyHidden>
            </Button>
          </div>
        </div>
      </div>
    </Form>
    {#if results}
      {#if results.length}
        <ChordSearchResults {results} onSelect={handleSelectedResult} />
      {/if}
    {:else}
      <ChordRecent onSelect={handleSelectedResult} />
    {/if}
  {/if}

  {#if showChord}
    <div class="heading">
      <Heading level={2} fontSize="1.25rem">Edit chord</Heading>
    </div>
    <ChordPreview
      bind:chord
      {stringOffsets}
      {capoAdjustment}
      onSave={onSaveChord}
      onCancel={handleSelectBack}
    />
  {/if}
</div>

<style>
  .wrapper,
  .search {
    display: grid;
    gap: 0.5rem;
  }
  .buttons {
    display: flex;
    gap: 0.25rem;
  }
  .custom {
    margin-left: auto;
  }
  .noResults {
    margin: 0.5rem 0;
    color: var(--bodyColorMuted);
  }
</style>
