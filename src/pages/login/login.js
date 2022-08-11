import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useDep } from "../../shared/context/context.dep";
import { authSelector } from "../../shared/selectors/selector.auth";
import { userLoginAction } from "./state/auth.action";

const Login = _ => {
   const authRed = useSelector(authSelector);
   const dispatch = useDispatch();
   const { authService } = useDep();

   const [userCredential, setUserCredential] = useState({
      userName: '',
      userPassword: ''
   });
   const [isLoading, setLoading] = useState(false);
   const [errMsg, setErrMsg] = useState('');

   // const isFirstRender = React.useRef(true);
   // React.useEffect(() => {
   //    if (isFirstRender.current) {
   //       isFirstRender.current = false;
   //       return;
   //    }
   // });

   useEffect(_ => {
      if (errMsg !== '') {
         alert(errMsg);
         setErrMsg('');
      }
   }, [errMsg]);

   const onChange = (key, val) => {
      setUserCredential(prevState => ({
         ...prevState,
         [key]: val
      }));
   }

   const onSubmit = async e => {
      e.preventDefault();
      setLoading(true);
      try {
         const response = await authService.doLogin({
            UserName: userCredential.userName,
            UserPassword: userCredential.userPassword
         });
         dispatch(userLoginAction({
            email: userCredential.userName,
            token: response.data.token
         }))
      } catch (err) {
         setErrMsg(err.response.data.response_message);
      } finally {
         setLoading(false);
      }
   }

   return ({
      userName: userCredential.userName,
      onChange: onChange,
      userPassword: userCredential.userPassword,
      onSubmit: onSubmit,
      isLoading: isLoading
   })
}

export default Login;