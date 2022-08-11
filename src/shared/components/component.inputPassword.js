import WithFormInput from "../hoc/hoc.formInput";
import { WithToolTipLeft } from "../hoc/tooltips/hoc.tooltip";

export const InputPassword = ({ id, onChange, val }) => (
   <>
      <input className="w-100" type={"password"} onChange={e => onChange(id, e.target.value)} value={val} />
   </>
)

export const FormInputPassword = WithFormInput(InputPassword);

export const FormInputPasswordVal = WithToolTipLeft(FormInputPassword);