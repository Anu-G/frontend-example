import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDep } from "../../shared/context/context.dep";
import { allowedCommand, allowedKey, allowedNavigation, allowPlus, inputEmailValidator, inputLenValidator, inputPhoneValidator } from "../../utils/util.validation";

const Register = _ => {
   const { authService } = useDep();
   const navigate = useNavigate();

   const [newUser, setNewUser] = useState({
      userName: '',
      userPassword: '',
      customerName: '',
      mobilePhoneNo: '',
      email: ''
   });
   const [formErr, setFormErr] = useState({
      userNameErr: '',
      userPasswordErr: '',
      mobilePhoneNoErr: '',
      emailErr: ''
   });
   const [isSuccess, setSuccess] = useState(false);
   const [isLoading, setLoading] = useState(false);
   const [errMsg, setErrMsg] = useState('');

   useEffect(_ => {
      if (errMsg !== '') {
         alert(errMsg);
         setErrMsg('');
      }
   }, [errMsg]);

   useEffect(_ => {
      if (!inputLenValidator(newUser.userPassword, 6) && newUser.userPassword !== '') {
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

      if (!inputLenValidator(newUser.userName, 6) && newUser.userName !== '') {
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

      if (!inputEmailValidator(newUser.email) && newUser.email !== '') {
         setFormErr(prevState => ({
            ...prevState,
            emailErr: 'invalid email address!'
         }));
      } else {
         setFormErr(prevState => ({
            ...prevState,
            emailErr: ''
         }));
      }

      if (!inputPhoneValidator(newUser.mobilePhoneNo) && newUser.mobilePhoneNo !== '') {
         setFormErr(prevState => ({
            ...prevState,
            mobilePhoneNoErr: 'invalid phone number!'
         }));
      } else {
         setFormErr(prevState => ({
            ...prevState,
            mobilePhoneNoErr: ''
         }));
      }
   }, [newUser.userPassword, newUser.userName, newUser.email, newUser.mobilePhoneNo])

   const onChange = (key, val) => {
      setNewUser(prevState => ({
         ...prevState,
         [key]: val
      }));
   }

   const onPhoneNumber = e => {
      if (!inputPhoneValidator(e.key) && !allowedKey.includes(e.keyCode) && !allowedCommand(e) && !allowedNavigation(e) && !allowPlus(e)) {
         setFormErr(prevState => ({
            ...prevState,
            mobilePhoneNoErr: 'input invalid!'
         }));
         e.preventDefault();
      }
   }

   const onSubmit = async e => {
      e.preventDefault();
      // setLoading(true);
      setSuccess(true)
      // try {
      //    const response = await authService.doRegister({
      //       user_name: newUser.userName,
      //       user_password: newUser.userPassword,
      //       customer_name: newUser.customerName,
      //       mobile_phone_no: newUser.mobilePhoneNo,
      //       email: newUser.email
      //    });
      //    if (response.status === 200) {
      //       setSuccess(true);
      //    }
      // } catch (err) {
      //    setErrMsg(err.response.data.response_message);
      // } finally {
      //    setLoading(false);
      // }
   }

   const popUpHandle = _ => {
      setSuccess(!isSuccess);
   }

   const toLogin = e => {
      e.preventDefault();
      navigate('/auth/login', { replace: false });
   };

   return ({
      userName: newUser.userName,
      userPassword: newUser.userPassword,
      customerName: newUser.customerName,
      mobilePhoneNo: newUser.mobilePhoneNo,
      email: newUser.email,
      phoneErr: formErr.mobilePhoneNoErr,
      userErr: formErr.userNameErr,
      passErr: formErr.userPasswordErr,
      emailErr: formErr.emailErr,
      isLoading,
      onChange,
      onSubmit,
      onPhoneNumber,
      isSuccess,
      popUpHandle,
      toLogin
   })
}

export default Register;