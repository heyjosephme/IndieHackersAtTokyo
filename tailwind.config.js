import daisyui from "daisyui";
export default {
  //...
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark","synthwave","cupcake"],
  },
};
