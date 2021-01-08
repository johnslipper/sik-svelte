<style>
  .placeholder {
    --phAnimationDuration: 1.2s;
    --phColor: var(--neutralLightest);

    position: relative;
    display: grid;
    gap: 1rem;
    grid-template-columns: 3.5rem 1fr;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem;
    overflow: hidden;
  }
  .placeholder::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: 400%;
    margin-left: -200%;
    animation: phAnimation var(--phAnimationDuration) linear infinite;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 46%,
        rgba(255, 255, 255, 0.35) 50%,
        rgba(255, 255, 255, 0) 54%
      )
      50% 50%;
  }

  .placeholder::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--phColor);
  }

  .artwork,
  .text::before,
  .text::after {
    background-color: var(--phColor);
  }

  .artwork {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  .text {
    display: grid;
    gap: 0.5rem;
  }

  .text::before,
  .text::after {
    content: "";
    height: 0.75rem;
  }

  @keyframes phAnimation {
    0% {
      transform: translate3d(-60%, 0, 0);
    }
    100% {
      transform: translate3d(60%, 0, 0);
    }
  }
</style>

<div class="placeholder">
  <div class="artwork" />
  <div class="text" />
</div>
