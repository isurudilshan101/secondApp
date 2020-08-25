import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',

    headers:{
        Authorization: 'Client-ID D4OO0GGuie8h-MYimpIQs2dZERNcR3D2ezGBbrs-VhI'
});