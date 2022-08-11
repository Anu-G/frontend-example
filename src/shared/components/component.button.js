import { Button } from "react-bootstrap";
import "./component.css"

export const ButtonComp = ({ variant, label, onClick, addStyle, disable }) => (
   <>
      <Button className={"mt-3 " + addStyle} variant={variant} type="submit" onClick={onClick} disable={disable}>
         <span className="button-font">
            {label}
         </span>
      </Button>
   </>
)