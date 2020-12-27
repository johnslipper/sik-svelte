<script>
  export let title;
  export let artist;
  export let album;
</script>

<style>
  .details {
    display: grid;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;
    font-size: 0.85rem;
  }

  .details > li {
    display: flex;
    gap: 0.25rem;
  }

  .label {
    display: inline-block;
    min-width: 3.6rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.85em;
    text-transform: uppercase;
    color: var(--neutralDark);
    background-color: var(--neutralLightest);
  }
</style>

<ul class="details">
  <li><span class="label">Title</span> {title}</li>
  <li><span class="label">Artist</span> {artist}</li>
  <li><span class="label">Album</span> {album}</li>
</ul>
