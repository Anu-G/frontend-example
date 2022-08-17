const managerMenuService = ({ doPost, doGet }) => {
   const doGetAll = async _ => {
      try {
         return await doGet({
            url: '/menu',
            params: {
               limit: 5,
               page: 1
            }
         });
      } catch (err) {
         throw err;
      }
   }

   return { doGetAll };
}

export default managerMenuService;