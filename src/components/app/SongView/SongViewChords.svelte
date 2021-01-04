<script>
  import { fade } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Dropdown from "../../ui/Dropdown.svelte";
  import ChordView from "../Chord/ChordView.svelte";
  import Heading from "../../ui/Heading.svelte";
  import { speakerIcon } from "../../ui/Icons/icons.js";
  import Icon from "../../ui/Icons/Icon.svelte";
  import { Button } from "../../ui/Button";
  export let chords;
  export let tuning;

  function handleOnPlay(chord) {
    // TODO
  }
</script>

<style>
  .sectionHeading {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    position: sticky;
    top: 5rem;
    font-size: 0.85rem;
    background-color: var(--neutralLightest);
    z-index: 1;
    text-align: center;
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
  .empty {
    padding: var(--contentPaddingHorizontal);
    color: var(--bodyColorMuted);
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem;
  }

  .actions :global(button) {
    display: grid;
    gap: 0.5rem;
    justify-items: center;
    padding: 0.75rem;
  }
</style>

<section in:fade={{ delay: 150 }}>
  <VisuallyHidden>
    <Heading text="Chords" level="2" />
  </VisuallyHidden>
  {#if chords && chords.length}
    {#each chords as section}
      <section>
        <div class="sectionHeading">
          <Heading text={section.title} level="3" fontSize="1rem" />
        </div>
        {#if section.chords}
          <ul class="chords">
            {#each section.chords as chord}
              <li class="chord">
                <Dropdown position="center">
                  <ChordView {chord} {tuning} />
                  <div slot="content">
                    <div class="actions" aria-labelledby="viewChordActionsMenu">
                      <VisuallyHidden>
                        <div id="viewChordActionsMenu">Chord actions</div>
                      </VisuallyHidden>
                      <Button on:click={() => handleOnPlay(chord)}>
                        <Icon d={speakerIcon} size="1.5rem" />
                        <div>Play</div>
                        <VisuallyHidden>chord</VisuallyHidden>
                      </Button>
                    </div>
                  </div>
                </Dropdown>
              </li>
            {/each}
          </ul>
        {/if}
      </section>
    {/each}
  {:else}
    <div class="empty">No chords saved</div>
  {/if}
</section>
