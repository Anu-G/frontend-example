import { Button, Card, Form } from "react-bootstrap";
import { ButtonComp } from "../../shared/components/component.button";
import { FormInputPassword } from "../../shared/components/component.inputPassword";
import { FormInputText } from "../../shared/components/component.inputText";
import { ModalLoading } from "../../shared/components/modalLoading/component.modalLoading";
import Login from "./login";
import "./loginView.css";

const Loginview = _ => {
   const { userName, onChange, userPassword, onSubmit, isLoading } = Login();
   return (
      <div className="login-page">
         <Card className="px-3 text-bg-secondary">
            <Card.Title className="text-center mt-3 mb-3 login-title">WMB Login</Card.Title>
            <Card.Body className="pt-0">
               <Form>
                  <FormInputText id="userName" val={userName} label="Username" onChange={onChange} />
                  <FormInputPassword id="userPassword" val={userPassword} label="Password" onChange={onChange} />
                  <ButtonComp variant="info" label="Login" addStyle="w-100 mb-3 text-white" onClick={onSubmit} />
                  <hr />
                  <ButtonComp variant="success" label="Create New Account" addStyle="w-100 mb-3" />
               </Form>
            </Card.Body>
         </Card>
         <ModalLoading show={isLoading} />
      </div>
   )
}

export default Loginview;