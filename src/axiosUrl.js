import axios from 'axios';

const instance = axios.create({
    baseURL:"http://13.235.225.118/dev/laravel/jwt-test/public/"
});

export default instance;
