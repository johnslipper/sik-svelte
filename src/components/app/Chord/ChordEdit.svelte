<script>
  import { onMount } from "svelte";
  import { chordSearch } from "./chordSearch.js";
  import { ButtonPrimary, ButtonDefault } from "../../ui/Button";
  import { Form, FormGroup, Input, Label } from "../../ui/Form";
  import Heading from "../../ui/Heading.svelte";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import ChordPreview from "./ChordPreview.svelte";

  export let chord;
  export let tuning = "";
  export let onSave;
  export let onCancel;

  let showChord = false;
  let isSearching = false;
  let searchInput = "";
  let noResults = false;

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

  function handleChooseCustomChord() {
    showChord = true;
    chord = {};
  }

  function handleChooseBack() {
    searchInput = searchInput || chord.name;
    showChord = false;
    chord = undefined;
  }

  function handleChooseSearch() {
    if (!searchInput) {
      return;
    }
    isSearching = true;
    noResults = false;
    chordSearch(searchInput)
      .then((results) => {
        if (results.length) {
          const { chordName, strings, fingering } = results[0];
          const formattedName = chordName.replaceAll(",", "");
          chord = {
            name: formattedName,
            frets: strings,
            fingering,
          };
          showChord = true;
        } else {
          noResults = true;
        }
      })
      .finally(() => (isSearching = false));
  }
</script>

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
    margin-top: 0.5rem;
  }
</style>

<div class="wrapper">
  {#if !showChord}
    <div class="heading">
      <Heading text="Add chord" level="2" fontSize="1.25rem" />
    </div>
    <Form onSubmit={handleChooseSearch}>
      <div class="search">
        <FormGroup>
          <Label htmlFor="chordNameSearch">Name</Label>
          <Input
            id="chordNameSearch"
            bind:value={searchInput}
            placeholder="e.g. Fmaj7"
            disabled={isSearching} />
          {#if noResults}
            <div class="noResults">No results</div>
          {/if}
        </FormGroup>
        <div class="buttons">
          <ButtonPrimary type="submit" on:click={handleChooseSearch}>
            {#if isSearching}
              Searching...
            {:else}
              Search
              <VisuallyHidden>chord</VisuallyHidden>
            {/if}
          </ButtonPrimary>
          <ButtonDefault on:click={onCancel}>Cancel</ButtonDefault>
          <div class="custom">
            <ButtonDefault on:click={handleChooseCustomChord}>
              Custom
              <VisuallyHidden>chord</VisuallyHidden>
            </ButtonDefault>
          </div>
        </div>
      </div>
    </Form>
  {/if}

  {#if showChord}
    <div class="heading">
      <Heading text="Edit chord" level="2" fontSize="1.25rem" />
    </div>
    <ChordPreview {chord} {tuning} {onSave} onCancel={handleChooseBack} />
  {/if}
</div>
