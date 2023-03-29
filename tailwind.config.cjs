/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            barlow: ["Barlow Condensed"],
            bellefair: ["Bellefair"],
         },
         colors: {
            darkBlue: "#0B0D17",
            progray: "#D0D6F9",
            prowhite: "#FFFFFF",
            blurBg: "#31343E",
            tranwhite: "#FFFFFF33",
         },
         backgroundImage: {
            desktop: "url('/assets/home/background-home-desktop.jpg')",
            tablet: "url('/assets/home/background-home-tablet.jpg')",
            mobile: "url('/assets/home/background-home-mobile.jpg')",
            desdesktop: "url('/assets/destination/background-destination-desktop.jpg')",
            destablet: "url('/assets/destination/background-destination-tablet.jpg')",
            desmobile: "url('/assets/destination/background-destination-mobile.jpg')",
            crsdesktop: "url('/assets/crew/background-crew-desktop.jpg')",
            crstablet: "url('/assets/crew/background-crew-tablet.jpg')",
            crsmobile: "url('/assets/crew/background-crew-mobile.jpg')",
            tedesktop: "url('/assets/technology/background-technology-desktop.jpg')",
            testablet: "url('/assets/technology/background-technology-tablet.jpg')",
            tesmobile: "url('/assets/technology/background-technology-mobile.jpg')",
         },
      },
   },
   plugins: [],
};
