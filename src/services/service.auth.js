const authService = ({ doPost, doGet }) => {
   const doLogin = async (userCredential) => {
      try {
         return await doPost({
            url: '/auth/login',
            data: userCredential
         })
      } catch (err) {
         throw err;
      }
   }

   return { doLogin };
}

export default authService;