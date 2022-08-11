import { Card, Form } from "react-bootstrap";
import AppRouter from "../../apps/router";
import { ButtonComp, ButtonCompVal } from "../../shared/components/component.button";
import { FormInputPasswordVal } from "../../shared/components/component.inputPassword";
import { FormInputTextVal } from "../../shared/components/component.inputText";
import { ModalLoading } from "../../shared/components/modalLoading/component.modalLoading";
import Login from "./login";
import "./loginView.css";

const Loginview = _ => {
   const { userName, onChange, userPassword, onSubmit, isLoading, userErr, passErr, toRegister } = Login();
   let isDisable = (userName === '' || userPassword === '' || userErr !== '' || passErr !== '');
   return (
      <div className="login-page">
         <Card className="px-3 text-bg-secondary login-card">
            <Card.Title className="text-center mt-3 mb-3 login-title">WMB Login</Card.Title>
            <Card.Body className="pt-0">
               <Form>
                  <FormInputTextVal id="userName" val={userName} label="Username" onChange={onChange} isShow={userErr !== ''} tipContent={userErr} />
                  <FormInputPasswordVal id="userPassword" val={userPassword} label="Password" onChange={onChange} isShow={passErr !== ''} tipContent={passErr} />
                  <ButtonCompVal variant="info" label="Login" addStyle="w-100 mb-3 text-white" onClick={onSubmit} isDisable={isDisable} isShow={isDisable} tipContent={"username and password can't be empty!"} />
                  <hr />
                  <div className="mt-4 text-center">
                     <span>Don't have account?</span>
                  </div>
                  <ButtonComp variant="success" label="Create New Account" addStyle="w-100 mb-3" onClick={toRegister} />
               </Form>
            </Card.Body>
         </Card>
         <ModalLoading show={isLoading} />
         <AppRouter />
      </div>
   )
}

export default Loginview;