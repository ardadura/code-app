import Axios from 'axios';
import useAxios, {configure, UseAxios} from 'axios-hooks';

const Api: any = Axios.create({
    baseURL: 'http://google.com'
})
configure({cache: false, axios: Api})
const axiosHooks: UseAxios = useAxios;
export {axiosHooks, Api}
