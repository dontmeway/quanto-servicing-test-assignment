import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru'
})