import { Modal } from "react-bootstrap";
import { ButtonComp, ButtonCompVal } from "./component.button";

export const ModalComp = ({ show, onHide, onClickOk, onClickCancel, header, content, labelOk, labelCancel, addStyle, isDisable, btnTipContent }) => (
   <>
      <Modal show={show} onHide={onHide} centered>
         {header !== undefined ? <Modal.Header>{header}</Modal.Header> : null}
         <Modal.Body>
            {content}
         </Modal.Body>
         {(onClickOk !== undefined)}
         {onClickOk === undefined ? (onClickCancel === undefined ? null :
            <Modal.Footer className={addStyle}>
               <ButtonComp variant="secondary" label={labelCancel} onClick={onClickCancel} />
               <ButtonCompVal variant="info" label={labelOk} onClick={onClickOk} isDisable={isDisable} isShow={isDisable} tipContent={btnTipContent} />
            </Modal.Footer>) :
            <Modal.Footer className={addStyle}>
               <ButtonCompVal variant="info" label={labelOk} onClick={onClickOk} isDisable={isDisable} isShow={isDisable} tipContent={btnTipContent} />
            </Modal.Footer>}
      </Modal>
   </>
)