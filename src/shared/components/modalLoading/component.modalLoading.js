import { Modal } from "react-bootstrap";
import "./component.modalLoading.css";
import Lottie from "lottie-react";
import loading from "./loading-animation.json";

export const ModalLoading = ({ show }) => (
   <>
      <Modal show={show} centered animation={false}>
         <Modal.Body className="d-flex justify-content-center" >
            <Lottie animationData={loading} loop={true} style={{ width: '300px', height: '300px' }} />
         </Modal.Body>
      </Modal>
   </>
)