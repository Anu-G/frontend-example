import WithFormInput from "../hoc/hoc.formInput";

export const InputText = ({ id, onChange, val }) => (
   <>
      <input className="w-100" type={"text"} onChange={e => onChange(id, e.target.value)} value={val} />
   </>
)

export const FormInputText = WithFormInput(InputText);
