import authService from "../../services/service.auth"
import managerMenuService from "../../services/service.manager.menu";

const serviceFactory = (apiClient) => ({
   authService: authService(apiClient),
   managerMenuService: managerMenuService(apiClient)
});

export default serviceFactory;