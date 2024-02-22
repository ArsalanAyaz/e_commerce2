import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        accent : "#EC2D9E",
      },
     container:{
      center:true,
      padding:"15px",
     } 
    },
  },
  plugins: [],
};
export default config;
