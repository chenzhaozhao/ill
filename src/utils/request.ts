import axios from "axios";
const token =`eyJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6IjYxOWM1NTRhODM3ZmVlM2E3MjgwMGM3NyIsImlhdCI6MTY2MDYyMDA3NywiZXhwIjoyMjY1NDIwMDc3fQ.QvglJm8UCr_W9uWeXOd3rZNoMSN9DHE9v6IvDSDJK3Y`;
let request = axios.create({
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        token
    }
})
request.defaults.baseURL = 'https://api3.jiankangyouyi.com/';
export default request;