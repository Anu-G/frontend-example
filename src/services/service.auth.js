const authService = ({ doPost, doGet }) => {
   const doLogin = async (userCredential) => {
      try {
         return await doPost({
            url: '/auth/login',
            data: userCredential
         });
      } catch (err) {
         throw err;
      }
   }

   const doRegister = async (userData) => {
      try {
         return await doPost({
            url: '/auth/register',
            data: userData
         });
      } catch (err) {
         throw err;
      }
   }

   return { doLogin, doRegister };
}

export default authService;