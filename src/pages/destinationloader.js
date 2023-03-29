export const DestinationLoader = async (key) => {
   const response = await fetch("/src/assets/data.json");
   const rawdata = await response.text();
   const data = JSON.parse(rawdata);

   for (var index = 0; index < data.destinations.length; index++) {
      if (data.destinations[index].name == key) {
         return data.destinations[index];
      }
   }
};
