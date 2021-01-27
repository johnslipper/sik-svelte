<script>
  import { ButtonLinkDefault } from "../ui/Button";
  import Heading from "../ui/Heading/Heading.svelte";
  import LogoMark from "./Logo/LogoMark.svelte";
</script>

<div class="wrapper">
  <div class="logo">
    <LogoMark />
  </div>
  <Heading text="Welcome to Songs I Know" level="2" fontSize="1.5rem" />
  <p>Collect songs you've learned to find inspiration when you need it</p>

  <div class="actions">
    <ButtonLinkDefault to="/sign-in">Sign in</ButtonLinkDefault>
    <ButtonLinkDefault to="/sign-up">Sign up</ButtonLinkDefault>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: 2rem;
    margin: 0 auto;
    text-align: center;
    max-width: 25rem;
  }
  .logo {
    max-width: 10rem;
    opacity: 0.85;
    margin: 0 auto 1rem;
  }
  p {
    margin: 1rem 0 1.5rem;
    color: var(--bodyColorMuted);
  }
  .actions {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
  }
</style>
