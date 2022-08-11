import { Card, Form } from "react-bootstrap";
import AppRouter from "../../apps/router";
import { ButtonCompVal } from "../../shared/components/component.button";
import { FormInputPasswordVal } from "../../shared/components/component.inputPassword";
import { FormInputText, FormInputTextVal } from "../../shared/components/component.inputText";
import { ModalLoading } from "../../shared/components/modalLoading/component.modalLoading";
import Register from "./register"
import "./registerView.css"

const RegisterView = _ => {
   const { userName, userPassword, customerName, mobilePhoneNo, email, isLoading, onChange, onSubmit, onPhoneNumber, phoneErr, userErr, passErr, emailErr, toLogin } = Register();
   let isDisable = (userName === '' || userPassword === '' || customerName === '' || mobilePhoneNo === '' || email === '' || phoneErr !== '' || userErr !== '' || passErr !== '' || emailErr !== '');
   return (
      <div className="register-page">
         <Card className="px-3 text-bg-secondary register-card">
            <Card.Title className="text-center mt-3 mb-3 register-title">WMB Registration</Card.Title>
            <Card.Body>
               <Form>
                  <FormInputTextVal id="userName" val={userName} label="Username*" onChange={onChange} isShow={userErr !== ''} tipContent={userErr} />
                  <FormInputPasswordVal id="userPassword" val={userPassword} label="Password*" onChange={onChange} isShow={passErr !== ''} tipContent={passErr} />
                  <FormInputText id="customerName" val={customerName} label="Full Name*" onChange={onChange} />
                  <FormInputTextVal id="mobilePhoneNo" val={mobilePhoneNo} label="Phone Number*" onChange={onChange} excHandle={onPhoneNumber} isShow={phoneErr !== ''} tipContent={phoneErr} />
                  <FormInputTextVal id="email" val={email} label="E-mail*" onChange={onChange} isShow={emailErr !== ''} tipContent={emailErr} />
                  <Form.Text className="text-white">*required field</Form.Text>
                  <ButtonCompVal variant="success" label="Create Account" addStyle="w-100 mb-3 text-white" onClick={onSubmit} isDisable={isDisable} isShow={isDisable} tipContent={"please fill the required field!"} />
               </Form>
               <div className="d-flex justify-content-between">
                  <span>Already have account?</span>
                  <a className="text-white" href="" onClick={toLogin}>Login</a>
               </div>
            </Card.Body>
         </Card>
         <ModalLoading show={isLoading} />
         <AppRouter />
      </div>
   )
}

export default RegisterView;