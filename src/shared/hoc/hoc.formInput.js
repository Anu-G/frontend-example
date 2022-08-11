import { Form } from "react-bootstrap";

const WithFormInput = (WrappedComponent) => props => (
   <>
      <Form.Group className="mb-3">
         <Form.Label>{props.label}</Form.Label>
         <WrappedComponent {...props} />
      </Form.Group>
   </>
)

export default WithFormInput;