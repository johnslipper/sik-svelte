<script>
  import { fade } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import ChordView from "../Chord/ChordView.svelte";
  import Heading from "../../ui/Heading.svelte";
  export let chords;
  export let tuning = "";
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
            {#each section.chords as chord, i}
              <li class="chord">
                <ChordView {chord} {tuning} key="chord{i}" />
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
