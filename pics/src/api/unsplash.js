import axios from 'axios';

export default axios.create({
    headers:{
        baseURL: 'https://api.unsplash.com' ,
        Authorization: 
            'Client-ID D4OO0GGuie8h-MYimpIQs2dZERNcR3D2ezGBbrs-VhI'
    }
});