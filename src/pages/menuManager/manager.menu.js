import { get } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDep } from "../../shared/context/context.dep";
import { listMenuSelector } from "../../shared/selectors/selector.auth";
import { allowedCommand, allowedKey, inputPriceValidator } from "../../utils/util.validation";
import { invalidField, invalidInput } from "../../utils/utisl.errMsg";

const MenuManager = (menuReq) => {
   const dispatch = useDispatch();
   const reduxState = useSelector(listMenuSelector);
   const { managerMenuService } = useDep();

   const [newMenu, setNewMenu] = useState({
      menuName: '',
      menuPrice: 0
   });
   const [formErr, setFormErr] = useState({
      menuPriceErr: ''
   });
   const [filter, setFilter] = useState({
      limit: menuReq,
      offset: 0,
      sortById: true,
      sortByDate: false
   })
   const [isShowForm, setShowForm] = useState(false);
   const [isLoading, setLoading] = useState(false);
   const [errMsg, setErrMsg] = useState('');

   useEffect(_ => {
      loadData();
   }, [filter]);

   const loadData = async _ => {
      setLoading(true);
      try {
         const response = await managerMenuService.doGetAll();
         if (response.status == 200) {
            console.log(formatMenu(response.data));
         }
      } catch (err) {
         setErrMsg(err.response.data.err);
      } finally {
         setLoading(false);
      }
   }

   useEffect(_ => {
      if (errMsg !== '') {
         alert(errMsg);
         setErrMsg('');
      }
   }, [errMsg]);

   useEffect(_ => {
      if (!inputPriceValidator(newMenu.menuPrice) && newMenu.menuPrice !== '') {
         setFormErr(prevState => ({
            ...prevState,
            menuPriceErr: invalidField('menu price')
         }));
      } else {
         setFormErr(prevState => ({
            ...prevState,
            menuPriceErr: ''
         }));
      }
   }, [newMenu.menuPrice])

   const onChange = (key, val) => {
      setNewMenu(prevState => ({
         ...prevState,
         [key]: val
      }));
   }

   const onMenuPrice = e => {
      if (!inputPriceValidator(e.key) && !allowedKey.includes(e.keyCode) && !allowedCommand(e.keyCode)) {
         setFormErr(prevState => ({
            ...prevState,
            menuPriceErr: invalidInput
         }));
         e.preventDefault();
      }
   }

   const onSubmit = async e => {
      e.preventDefault();
      setLoading(true);
      try {
         // create menu
      } catch (err) {
         setErrMsg(err.response.data.response_message);
      } finally {
         setLoading(false);
      }
   }

   const onShowForm = _ => {
      setShowForm(!isShowForm);
   }

   const formatMenu = (menus) =>
      Array.isArray(menus) &&
      menus.map(menu => {
         const menuId = get(menu, 'ID', '');
         const menuName = get(menu, 'MenuName', '');
         const menuPrices = get(menu, 'MenuPrices.Price', '');

         return { menuId, menuName, menuPrices }
      })

   return ({
      menuName: newMenu.menuName,
      menuPrice: newMenu.menuPrice,
      priceErr: formErr.menuPriceErr,
      isShowForm,
      isLoading,
      onChange,
      onSubmit,
      onMenuPrice,
      onShowForm,
      listMenu: reduxState.listMenu
   })
}

export default MenuManager;