import { Button } from "react-bootstrap";
import { WithToolTipCenter } from "../hoc/tooltips/hoc.tooltip";
import "./component.css"

export const ButtonComp = ({ variant, label, onClick, addStyle, isDisable }) => (
   <>
      <Button className={"mt-3 " + addStyle} variant={variant} type="submit" onClick={onClick} disabled={isDisable}>
         <span className="button-font">
            {label}
         </span>
      </Button>
   </>
)

export const ButtonCompVal = WithToolTipCenter(ButtonComp);