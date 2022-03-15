import {httpClient} from "../httpClient";

export const authServices = {
     auth(data) {
        return httpClient.post('/auth', data)
    },
    getAuth() {
         return httpClient.get('/')
    },
    update(data) {
        return httpClient.post('/update', data)
    }
}