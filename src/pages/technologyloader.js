export const technologyLoader = async (key) => {
   const response = await fetch("../src/assets/data.json");
   const rawdata = await response.text();
   const data = JSON.parse(rawdata);
   for (var index = 0; index < data.technology.length; index++) {
      if (data.technology[index].name.includes(key)) {
         return data.technology[index];
      }
   }
};
