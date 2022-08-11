import authService from "../../services/service.auth"

const serviceFactory = (apiClient) => ({
   authService: authService(apiClient)
});

export default serviceFactory;