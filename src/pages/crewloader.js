export const CrewLoader = async (key) => {
   const response = await fetch(
      "https://raw.githubusercontent.com/Tinsae-Ayana/space-toursim/gh-pages/assets/data.json"
   );
   const rawdata = await response.text();
   const data = JSON.parse(rawdata);
   for (var index = 0; index < data.crew.length; index++) {
      if (data.crew[index].name.includes(key)) {
         console.log(data.crew[index]);
         return data.crew[index];
      }
   }
};
