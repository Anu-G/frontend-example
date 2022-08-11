import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useDep } from "../../shared/context/context.dep";
import { authSelector } from "../../shared/selectors/selector.auth";
import { inputLenValidator } from "../../utils/util.validation";
import { userLoginAction } from "./state/auth.action";

const Login = _ => {
   const authRed = useSelector(authSelector);
   const dispatch = useDispatch();
   const { authService } = useDep();

   const [userCredential, setUserCredential] = useState({
      userName: '',
      userPassword: ''
   });
   const [formErr, setFormErr] = useState({
      userNameErr: '',
      userPasswordErr: ''
   })
   const [isLoading, setLoading] = useState(false);
   const [errMsg, setErrMsg] = useState('');

   // const isFirstRender = useRef(true);
   // useEffect(() => {
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

   useEffect(_ => {
      if (!inputLenValidator(userCredential.userPassword, 6) && userCredential.userPassword !== '') {
         setFormErr(prevState => ({
            ...prevState,
            userPasswordErr: 'password at least 6 characters!'
         }));
      } else {
         setFormErr(prevState => ({
            ...prevState,
            userPasswordErr: ''
         }));
      }

      if (!inputLenValidator(userCredential.userName, 6) && userCredential.userName !== '') {
         setFormErr(prevState => ({
            ...prevState,
            userNameErr: 'username at least 6 characters!'
         }));
      } else {
         setFormErr(prevState => ({
            ...prevState,
            userNameErr: ''
         }));
      }
   }, [userCredential.userPassword, userCredential.userName])

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
      userPassword: userCredential.userPassword,
      passErr: formErr.userPasswordErr,
      userErr: formErr.userNameErr,
      onChange,
      onSubmit,
      isLoading
   })
}

export default Login;