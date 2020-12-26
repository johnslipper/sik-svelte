<script>
  export let album;
  export let artwork = {
    album: "",
    url: "",
  };
  const dataPrefix = "data:image/svg+xml;utf8,";
  const placeholderSVG = `<svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M188 58.3321C188 57.7715 188 57.0241 187.812 56.4636C187.437 53.8477 186.124 51.2318 184.248 49.3633C182.184 47.3079 179.557 46 176.556 46C175.993 46 175.618 46 175.055 46.1868L128.977 52.465C125.788 52.8387 122.974 54.3335 120.91 56.3888C118.846 58.4442 117.533 61.2469 117.533 64.6102V101.42V161.211C117.158 161.025 116.97 160.838 116.783 160.838C110.967 156.54 103.087 153.924 94.4568 153.924C85.8267 153.924 77.947 156.54 72.131 160.838C65.9398 165.322 62 171.862 62 178.962C62 186.062 65.7522 192.602 72.131 197.087C77.947 201.384 85.8267 204 94.4568 204C103.087 204 110.967 201.384 116.783 197.087C122.974 192.602 126.914 186.062 126.914 178.962C126.914 178.775 126.914 178.402 126.914 178.215V105.53C202.475 95.8151 148.671 105.53 188 58.3321Z" fill="white"/></svg>`;
</script>

<style>
  img {
    height: 100%;
    background-color: var(--neutralLight);
  }
</style>

{#if artwork && artwork.url}
  <img src={artwork.url} alt="{artwork.album || album || 'album'} artwork" />
{:else}<img src={dataPrefix + placeholderSVG} alt="placeholder artwork" />{/if}
