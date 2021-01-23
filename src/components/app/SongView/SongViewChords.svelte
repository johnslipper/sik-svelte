<script>
  import { fade } from "svelte/transition";
  import VisuallyHidden from "../../ui/VisuallyHidden.svelte";
  import Dropdown from "../../ui/Dropdown.svelte";
  import ChordView from "../Chord/ChordView.svelte";
  import ChordPlay from "../Chord/ChordPlay.svelte";
  import Heading from "../../ui/Heading/Heading.svelte";
  import HeadingSticky from "../../ui/Heading/HeadingSticky.svelte";
  export let chords;
  export let tuning;
  export let capoAdjustment;

  function getSectionTitle(title) {
    return capoAdjustment ? `${title} (capo ${capoAdjustment})` : title;
  }
</script>

<section in:fade={{ delay: 150 }}>
  <VisuallyHidden>
    <Heading text="Chords" level="2" />
  </VisuallyHidden>
  {#if chords && chords.length}
    {#each chords as section}
      <section>
        <HeadingSticky>
          <Heading
            text={getSectionTitle(section.title)}
            level="3"
            fontSize="inherit"
          />
        </HeadingSticky>
        {#if section.chords}
          <ul class="chords">
            {#each section.chords as chord, i}
              <li class="chord" in:fade={{ delay: i * 50 }}>
                <Dropdown position="center">
                  <ChordView {chord} {tuning} />
                  <div slot="content">
                    <div class="actions" aria-labelledby="viewChordActionsMenu">
                      <VisuallyHidden>
                        <div id="viewChordActionsMenu">Chord actions</div>
                      </VisuallyHidden>
                      <ChordPlay {chord} {tuning} {capoAdjustment} />
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
