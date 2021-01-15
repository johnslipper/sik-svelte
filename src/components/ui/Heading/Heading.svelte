<script>
  export let text = "Heading";
  export let level = 1;
  export let fontSize = "1.2rem";
  let displayText = `<h${level} style="
        font-size:${fontSize}; 
        color: var(--headingColor);
        font-weight: var(--headingWeight);
        margin: 0;
        ">${text}</h${level}>`;
</script>

{@html displayText}
