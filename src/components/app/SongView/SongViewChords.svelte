<script>
  import { fade } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import { Dropdown } from "../../ui/Dropdown";
  import ChordView from "../Chord/ChordView.svelte";
  import ChordPlay from "../Chord/ChordPlay.svelte";
  import Heading from "../../ui/Heading/Heading.svelte";
  import HeadingSticky from "../../ui/Heading/HeadingSticky.svelte";
  export let chords;
  export let stringOffsets;
  export let capoAdjustment;

  function getSectionTitle(title) {
    return capoAdjustment ? `${title} (capo ${capoAdjustment})` : title;
  }
</script>

<section in:fade={{ delay: 150 }}>
  <VisuallyHidden>
    <Heading level={2}>Chords</Heading>
  </VisuallyHidden>
  {#if chords && chords.length}
    {#each chords as section}
      <section>
        <HeadingSticky>
          <Heading level={3} fontSize="inherit"
            >{getSectionTitle(section.title)}</Heading
          >
        </HeadingSticky>
        {#if section.chords}
          <ul class="chords">
            {#each section.chords as chord, i}
              <li class="chord" in:fade={{ delay: i * 50 }}>
                <Dropdown position="center">
                  <ChordView {chord} {stringOffsets} />
                  <svelte:fragment slot="menu">
                    <ChordPlay {chord} {stringOffsets} {capoAdjustment} />
                  </svelte:fragment>
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

<style>
  section {
    --headerTopOffset: 4.25rem;
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
    max-width: 10rem;
    text-align: center;
  }
  .empty {
    padding: var(--contentPaddingHorizontal);
    color: var(--bodyColorMuted);
  }
</style>
