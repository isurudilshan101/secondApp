import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{

    onSearchSubmit(term){
       
        axios.get('https://api.unsplash.com/',{
        params:{query:term},
        headers:{
            Authorization: 'Client-ID D4OO0GGuie8h-MYimpIQs2dZERNcR3D2ezGBbrs-VhI'
        }

        }).then(response=>{
            console.log(response.data.results);

        });
    }

    render(){
    return (
    <div className="ui container" style={{marginTop:'10px'}}>
       <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
        
        );
    }
}

export default App;