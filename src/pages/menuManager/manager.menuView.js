import { Card, Form, Table } from "react-bootstrap";
import { ButtonComp } from "../../shared/components/component.button";
import { FormInputText, FormInputTextVal } from "../../shared/components/component.inputText";
import { ModalComp } from "../../shared/components/component.modal";
import { requiredField } from "../../utils/utisl.errMsg";
import MenuManager from "./manager.menu"

const MenuDashboardView = _ => {
   const { menuName, menuPrice, priceErr, isShowForm, isLoading, onChange, onSubmit, onMenuPrice, onShowForm } = MenuManager(5);
   let isDisable = (menuName === '' || menuPrice === 0 || priceErr !== '');
   console.log(isDisable);
   return (
      <div className="mx-5 py-3">
         <ModalComp show={isShowForm} onHide={onShowForm} onClickOk={onSubmit} onClickCancel={onShowForm} labelOk={"Submit"} labelCancel={"Cancel"} btnTipContent={requiredField}
            isDisable={isDisable} tipContent={requiredField} content={
               <Card className="px-3 text-bg-light">
                  <Card.Body>
                     <Form>
                        <FormInputText id="menuName" val={menuName} label="Menu Name" onChange={onChange} />
                        <FormInputTextVal id="menuPrice" val={menuPrice} label="Menu Price" onChange={onChange} excHandle={onMenuPrice} isShow={priceErr !== ''} tipContent={priceErr} />
                     </Form>
                  </Card.Body>
               </Card>
            } />
         <div className="mt-3 d-flex flex-column">
            <div className="d-flex flex-row justify-content-between align-items-center">
               <h3>List Food</h3>
               <ButtonComp variant={"info"} onClick={onShowForm} label={"Add Menu"} />
            </div>
            <div>
               <Table striped bordered hover>
                  {/* <thead>
                            <tr key={"headerMenu"}>
                                {MenuCol.map((key) => (
                                    <th className="text-center">{key.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {listFood.map((item) => (
                                <tr key={item.Id}>
                                    {Object.values(item).map((val, i) => { return (i === 2 ? <td>{NumberWithCommas(val)}</td> : <td>{val}</td>) }
                                    )}
                                    <td className="text-center"><Button variant="danger" onClick={() => onDelete(item.Id)}>Remove</Button></td>
                                </tr>
                            ))}
                        </tbody> */}
               </Table>
            </div>
         </div>
      </div>
   )
}

export default MenuDashboardView;