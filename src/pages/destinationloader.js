export const DestinationLoader = async (key) => {
   const response = await fetch("/space-toursim//src/assets/data.json");
   const rawdata = await response.text();
   console.log(rawdata);
   const data = JSON.parse(rawdata);

   for (var index = 0; index < data.destinations.length; index++) {
      if (data.destinations[index].name == key) {
         return data.destinations[index];
      }
   }
};
