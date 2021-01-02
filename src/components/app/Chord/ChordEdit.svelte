<script>
  import { chordSearch } from "./chordSearch.js";
  import { ButtonPrimary, ButtonDefault } from "../../ui/Button";
  import { Form, FormGroup, Input, Label } from "../../ui/Form";
  import Heading from "../../ui/Heading.svelte";
  import ChordPreview from "./ChordPreview.svelte";

  export let chord = {
    name: "Fmaj7",
    frets: "1 X 2 2 1 0",
    fingering: "1 X 3 4 2 X",
  };
  export let tuning = "";
  export let onSave;

  let showChord = false;
  let isSearching = false;
  let searchInput = "";

  function handleChooseCustomChord() {
    showChord = true;
  }

  function handleChooseBack() {
    showChord = false;
  }

  function handleChooseSearch() {
    if (!searchInput) {
      return;
    }
    isSearching = true;
    chordSearch(searchInput)
      .then((results) => {
        if (results.length) {
          const { chordName, strings, fingering } = results[0];
          chord = { name: chordName, frets: strings, fingering };
          showChord = true;
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
    display: grid;
    gap: 0.25rem;
    grid-template-columns: 1fr 1fr;
  }
</style>

<div class="wrapper">
  <div class="heading">
    <Heading text="Edit chord" level="2" fontSize="1.25rem" />
  </div>
  {#if !showChord}
    <Form onSubmit={handleChooseSearch}>
      <div class="search">
        <FormGroup>
          <Label htmlFor="chordNameSearch">Name</Label>
          <Input
            id="chordNameSearch"
            bind:value={searchInput}
            placeholder="e.g. Fmaj7"
            disabled={isSearching} />
        </FormGroup>
        <div class="buttons">
          <ButtonPrimary type="submit" on:click={handleChooseSearch}>
            {#if isSearching}Searching...{:else}Search chord{/if}
          </ButtonPrimary>
          <ButtonDefault on:click={handleChooseCustomChord}>
            Custom chord
          </ButtonDefault>
        </div>
      </div>
    </Form>
  {/if}

  {#if showChord}
    <ChordPreview {chord} {tuning} {onSave} onCancel={handleChooseBack} />
  {/if}
</div>
