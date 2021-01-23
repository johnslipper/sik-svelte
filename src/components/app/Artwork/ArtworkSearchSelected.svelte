<script>
  export let title;
  export let artist;
  export let album;
</script>

<ul class="details">
  <li><span class="label">Title</span><span class="value">{title}</span></li>
  <li><span class="label">Artist</span><span class="value">{artist}</span></li>
  <li><span class="label">Album</span><span class="value">{album}</span></li>
</ul>

<style>
  .details {
    display: grid;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 0.85rem;
    flex-grow: 1;
  }

  .details > li {
    display: grid;
    grid-template-columns: 3.6rem 1fr;
  }
  .label,
  .value {
    display: inline-block;
    padding: 0.33rem 0.5rem;
  }
  .label {
    font-size: 0.85em;
    text-transform: uppercase;
    color: var(--neutralDark);
    background-color: var(--neutralLight);
  }
  .value {
    background-color: var(--neutralLightest);
  }
</style>
