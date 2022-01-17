<script lang="ts">
  export let text = "Loading";
</script>

<span class="wrapper" role="presentation">
  {text}
  <span />
  <span />
  <span />
</span>

<style>
  .wrapper > span {
    font-size: 1.5em;
    animation: pulse 2s infinite linear;
    line-height: 0.75;
  }
  .wrapper > span::before {
    content: ".";
  }
  .wrapper > span:nth-child(1) {
    animation-delay: 0ms;
  }
  .wrapper > span:nth-child(2) {
    animation-delay: 150ms;
  }
  .wrapper > span:nth-child(3) {
    animation-delay: 300ms;
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
