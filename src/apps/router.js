import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Apps from "../App";
import Loginview from "../pages/login/loginView";
import RegisterView from "../pages/register/registerView";
import { authSelector } from "../shared/selectors/selector.auth";

const AppRouter = _ => {
   const authRed = useSelector(authSelector);

   const RequireAuth = ({ children }) => {
      const authed = authRed.token !== '' && authRed.email !== '';
      return authed ? children : <Navigate to={"/auth/login"} replace />;
   }

   return (
      <Routes>
         <Route path="/auth/login/*" element={<Loginview />} />
         <Route path="/auth/register/*" element={<RegisterView />} />
         <Route path="/home/*" element={
            <RequireAuth>
               <Apps />
            </RequireAuth>
         } />
      </Routes>
   )
}

export default AppRouter;