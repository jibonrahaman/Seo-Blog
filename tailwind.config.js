const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT ({
  
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        maxWidth:{
        "container":"1320px"
        },
        fontFamily :{
         "dm":["Roboto"]
        },      
        boxShadow:{
          'shadow':"0 10px 15px -3px rgba(0,0,0,.3)",
          'online':"0 4px 6px -4px rgba(0,0,0,.1);",
   
          },
      },
    },
    plugins: [],
  }
)
