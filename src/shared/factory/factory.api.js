const apiFactory = (client) => {
   const doPost = async ({ url, data }) => {
      try {
         const response = await client.post(url, data);
         return response;
      } catch (err) {
         throw err;
      }
   }

   const doGet = async ({ url }) => {
      try {
         const response = await client.get(url, params);
         return response;
      } catch (err) {
         throw err;
      }
   }

   return { doPost, doGet }
}

export default apiFactory;