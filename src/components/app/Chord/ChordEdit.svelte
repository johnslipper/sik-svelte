<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { addChord } from "../../../localStorage.js";
  import { chordSearch } from "./chordSearch.js";
  import { Button } from "../../ui/Button";
  import { Form, FormGroup, Input, LabelDefault } from "../../ui/Form";
  import Heading from "../../ui/Heading/Heading.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import ChordPreview from "./ChordPreview.svelte";
  import ChordSearchResults from "./ChordSearchResults.svelte";
  import ChordRecent from "./ChordRecent.svelte";

  export let chord;
  export let stringOffsets;
  export let capoAdjustment;
  export let onSave;
  export let onCancel;

  let showChord = false;
  let isSearching = false;
  let searchInput = "";
  let results;

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

  function handleSelectedResult(selected) {
    chord = selected;
    showChord = true;
  }

  function onSaveChord(chord) {
    addChord(chord);
    onSave(chord);
  }
</script>

<div class="wrapper">
  {#if !showChord}
    <div class="heading">
      <Heading text="Add chord" level="2" fontSize="1.25rem" />
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
        <ChordSearchResults
          {results}
          {capoAdjustment}
          onSelect={handleSelectedResult}
        />
      {/if}
    {:else}
      <ChordRecent onSelect={handleSelectedResult} />
    {/if}
  {/if}

  {#if showChord}
    <div class="heading">
      <Heading text="Edit chord" level="2" fontSize="1.25rem" />
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
