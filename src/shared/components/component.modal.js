import { Modal } from "react-bootstrap";
import { ButtonComp } from "./component.button";

export const ModalComp = ({ show, onHide, onClickOk, onClickCancel, header, content, labelOk, labelCancel }) => (
   <>
      <Modal show={show} onHide={onHide}>
         {header !== undefined ? <Modal.Header>{header}</Modal.Header> : null}
         <Modal.Body>
            {content}
         </Modal.Body>
         {(onClickOk !== undefined)}
         {onClickOk === undefined ? (onClickCancel === undefined ? null :
            <Modal.Footer>
               <ButtonComp variant="secondary" label={labelCancel} onClick={onClickCancel} />
               <ButtonComp variant="info" label={labelOk} onClick={onClickOk} />
            </Modal.Footer>) :
            <Modal.Footer>
               <ButtonComp variant="info" label={labelOk} onClick={onClickOk} />
            </Modal.Footer>}
      </Modal>
   </>
)