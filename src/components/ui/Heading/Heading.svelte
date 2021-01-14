<script>
  import { theme } from "../../../theme.js";
  export let text = "Heading";
  export let level = 1;
  export let fontSize = "1.2rem";
  let displayText = `<h${level} style="
        font-size:${fontSize}; 
        color: ${theme.headingColor};
        font-weight: ${theme.headingWeight};
        margin: 0;
        ">${text}</h${level}>`;
</script>

{@html displayText}
