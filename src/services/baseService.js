import axios from "axios"
import {DOMAIN,http,TOKEN} from '../ulti/setting'

export class baseService {
    //put json về phía backend
    put = (url,model) => {
        return  axios({
            url:`${DOMAIN}/${url}`,
            method:'PUT',
            data:model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        }) 
    }

    post = (url,model) => {
        return http.post(url,model)
        axios({
            url:`${DOMAIN}/${url}`,
            method:'POST',
            data:model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        }) 
    }


    get = (url) => {
        return http.get(url);
        axios({
            url:`${DOMAIN}/${url}`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}