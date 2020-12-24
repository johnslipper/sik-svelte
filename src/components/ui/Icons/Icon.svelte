<script>
  export let fill = "currentColor";
  export let size = "1em"; // default 1em match the parent element

  // default heart icon
  export let d =
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z";
</script>

<style>
  .icon {
    position: relative;
    display: inline-block;
  }
</style>

<div class="icon" style="width:{size};height:{size}">
  <svg
    viewBox="0 0 250 250"
    {fill}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg">
    <path {d} />
  </svg>
</div>
