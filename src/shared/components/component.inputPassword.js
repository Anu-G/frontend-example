import WithFormInput from "../hoc/hoc.formInput";

export const InputPassword = ({ id, onChange, val }) => (
   <>
      <input className="w-100" type={"password"} onChange={e => onChange(id, e.target.value)} value={val} />
   </>
)

export const FormInputPassword = WithFormInput(InputPassword);