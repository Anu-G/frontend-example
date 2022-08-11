import WithFormInput from "../hoc/hoc.formInput";
import { WithToolTipLeft } from "../hoc/tooltips/hoc.tooltip";

export const InputText = ({ id, onChange, val, excHandle }) => (
   <>
      <input className="w-100" type={"text"} onChange={e => onChange(id, e.target.value)} value={val} onKeyDown={excHandle} />
   </>
)

export const FormInputText = WithFormInput(InputText);

export const FormInputTextVal = WithToolTipLeft(FormInputText);