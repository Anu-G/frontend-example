import { Container, Nav, Navbar } from "react-bootstrap";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import AppRouter from "./apps/router";
import "./App.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogoutAction } from "./pages/login/state/auth.action";
import { ModalLoading } from "./shared/components/modalLoading/component.modalLoading";

const Apps = _ => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [isLoading, setLoading] = useState(false);
   const [errMsg, setErrMsg] = useState('');

   useEffect(_ => {
      if (errMsg !== '') {
         alert(errMsg);
         setErrMsg('');
      }
   }, [errMsg]);

   const onLogout = async e => {
      e.preventDefault();
      setLoading(true);
      try {
         // do logout on backend
         dispatch(userLogoutAction({
            email: '',
            token: ''
         }));
         navigate('/auth/login');
      } catch (err) {
         setErrMsg(err.toString());
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className="dashboard">
         <Navbar bg="primary" expand="lg">
            <Container fluid className="px-3">
               <Navbar.Brand className="home-nav" onClick={_ => navigate('/home')}>Warung Makan Bahari</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-control" className="navbar-dark" />
               <Navbar.Collapse id="basic-navbar-control" className="justify-content-between">
                  <Nav className="nav-auto">
                     <Nav.Link onClick={null}>Order</Nav.Link>
                  </Nav>
                  <Nav className="nav-auto">
                     <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <div>
            <Outlet />
         </div>
         <AppRouter />
         <ModalLoading show={isLoading} />
      </div>
   )
}

export default Apps;