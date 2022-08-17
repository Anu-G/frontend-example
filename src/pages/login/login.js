import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useDep } from "../../shared/context/context.dep";
import { inputLenValidator } from "../../utils/util.validation";
import { userLoginAction } from "./state/auth.action";

const Login = _ => {
   const dispatch = useDispatch();
   const { authService } = useDep();
   const navigate = useNavigate();

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
         if (response.status == 200) {
            dispatch(userLoginAction({
               email: userCredential.userName,
               token: response.data.data
            }));
            navigate('/home');
         }
      } catch (err) {
         console.log(err);
         setErrMsg(err.response.data.response_message);
      } finally {
         setLoading(false);
      }
   }

   const toRegister = e => {
      e.preventDefault();
      navigate('/auth/register', { replace: false });
   };

   return ({
      userName: userCredential.userName,
      userPassword: userCredential.userPassword,
      passErr: formErr.userPasswordErr,
      userErr: formErr.userNameErr,
      onChange,
      onSubmit,
      isLoading,
      toRegister
   })
}

export default Login;